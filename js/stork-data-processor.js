// Stork Migration Data Processor
// Processes 1439 stork migration records for globe visualization

class StorkMigrationProcessor {
    constructor() {
        this.storkData = [];
        this.migrationCorridors = [];
        this.migrationWaves = [];
        this.densityMap = new Map();
    }

    // Process stork data from JSON file
    async processStorkData() {
        try {
            const response = await fetch('./data/bird_data.json');
            const allData = await response.json();
            
            // Filter for stork records only
            this.storkData = allData.filter(record => 
                record.Species && record.Species.toLowerCase() === 'stork'
            );
            
            console.log(`Found ${this.storkData.length} stork migration records`);
            
            // Process the data
            this.createMigrationCorridors();
            this.createMigrationWaves();
            this.calculateDensityMap();
            
            return {
                totalRecords: this.storkData.length,
                corridors: this.migrationCorridors,
                waves: this.migrationWaves,
                densityMap: this.densityMap
            };
            
        } catch (error) {
            console.error('Error processing stork data:', error);
            // Fallback to sample data if file doesn't load
            this.generateSampleStorkData();
            return this.processSampleData();
        }
    }

    // Create migration corridors by clustering similar routes
    createMigrationCorridors() {
        const corridors = new Map();
        const clusterRadius = 5; // 5 degree clustering radius
        
        this.storkData.forEach(record => {
            const start = { 
                lat: record.Start_Latitude, 
                lng: record.Start_Longitude 
            };
            const end = { 
                lat: record.End_Latitude, 
                lng: record.End_Longitude 
            };
            
            // Find or create corridor
            const corridorKey = this.getCorridorKey(start, end, clusterRadius);
            
            if (!corridors.has(corridorKey)) {
                corridors.set(corridorKey, {
                    id: corridorKey,
                    startPoint: start,
                    endPoint: end,
                    routes: [],
                    frequency: 0,
                    avgDistance: 0,
                    avgDuration: 0,
                    seasons: new Set()
                });
            }
            
            const corridor = corridors.get(corridorKey);
            corridor.routes.push(record);
            corridor.frequency++;
            corridor.avgDistance += record.Flight_Distance_km || 0;
            corridor.avgDuration += record.Flight_Duration_hours || 0;
            if (record.Migration_Start_Month) {
                corridor.seasons.add(record.Migration_Start_Month);
            }
        });
        
        // Calculate averages and create final corridor data
        this.migrationCorridors = Array.from(corridors.values()).map(corridor => ({
            ...corridor,
            avgDistance: corridor.avgDistance / corridor.frequency,
            avgDuration: corridor.avgDuration / corridor.frequency,
            seasons: Array.from(corridor.seasons),
            thickness: Math.min(10, Math.max(1, corridor.frequency / 10)) // Visual thickness
        })).sort((a, b) => b.frequency - a.frequency); // Sort by frequency
    }

    // Create seasonal migration waves
    createMigrationWaves() {
        const seasonalGroups = {
            spring: ['Mar', 'Apr', 'May'],
            summer: ['Jun', 'Jul', 'Aug'], 
            autumn: ['Sep', 'Oct', 'Nov'],
            winter: ['Dec', 'Jan', 'Feb']
        };
        
        Object.entries(seasonalGroups).forEach(([season, months]) => {
            const seasonData = this.storkData.filter(record => 
                months.includes(record.Migration_Start_Month)
            );
            
            if (seasonData.length > 0) {
                // Group by week for wave animation
                const waves = this.groupByTimeWaves(seasonData, season);
                this.migrationWaves.push({
                    season,
                    months,
                    totalBirds: seasonData.length,
                    waves: waves
                });
            }
        });
    }

    // Group birds into time-based waves for animation
    groupByTimeWaves(seasonData, season) {
        const waveSize = Math.min(50, Math.max(10, seasonData.length / 8)); // 8 waves per season
        const waves = [];
        
        for (let i = 0; i < seasonData.length; i += waveSize) {
            const waveData = seasonData.slice(i, i + waveSize);
            waves.push({
                waveNumber: Math.floor(i / waveSize) + 1,
                birds: waveData.map(record => ({
                    id: record.Bird_ID,
                    start: {
                        lat: record.Start_Latitude,
                        lng: record.Start_Longitude
                    },
                    end: {
                        lat: record.End_Latitude,
                        lng: record.End_Longitude
                    },
                    distance: record.Flight_Distance_km,
                    duration: record.Flight_Duration_hours,
                    success: record.Migration_Success === 'Success',
                    flockSize: record.Flock_Size || 1,
                    weather: record.Weather_Condition
                })),
                delay: (Math.floor(i / waveSize)) * 2000 // 2 second delay between waves
            });
        }
        
        return waves;
    }

    // Calculate density heat map
    calculateDensityMap() {
        const gridSize = 2; // 2 degree grid
        
        this.storkData.forEach(record => {
            // Add density for start point
            const startKey = `${Math.floor(record.Start_Latitude / gridSize) * gridSize},${Math.floor(record.Start_Longitude / gridSize) * gridSize}`;
            this.densityMap.set(startKey, (this.densityMap.get(startKey) || 0) + 1);
            
            // Add density for end point
            const endKey = `${Math.floor(record.End_Latitude / gridSize) * gridSize},${Math.floor(record.End_Longitude / gridSize) * gridSize}`;
            this.densityMap.set(endKey, (this.densityMap.get(endKey) || 0) + 1);
        });
    }

    // Helper function to create corridor clustering key
    getCorridorKey(start, end, radius) {
        const clusterStart = {
            lat: Math.floor(start.lat / radius) * radius,
            lng: Math.floor(start.lng / radius) * radius
        };
        const clusterEnd = {
            lat: Math.floor(end.lat / radius) * radius,  
            lng: Math.floor(end.lng / radius) * radius
        };
        
        return `${clusterStart.lat},${clusterStart.lng}-${clusterEnd.lat},${clusterEnd.lng}`;
    }

    // Generate sample stork data if real data isn't available
    generateSampleStorkData() {
        console.log('Generating sample stork data...');
        
        // Major stork migration routes based on real patterns
        const majorRoutes = [
            // European-African routes
            { startLat: 54, startLng: 13, endLat: -26, endLng: 28, region: 'Europe-Africa' },
            { startLat: 52, startLng: 5, endLat: -22, endLng: 17, region: 'Europe-Africa' },
            { startLat: 47, startLng: 19, endLat: -29, endLng: 24, region: 'Europe-Africa' },
            
            // Asian routes
            { startLat: 45, startLng: 82, endLat: 26, endLng: 88, region: 'Asia' },
            { startLat: 62, startLng: -111, endLat: 40, endLng: 48, region: 'Siberia-Middle East' },
            
            // North American routes
            { startLat: 49, startLng: -97, endLat: 19, endLng: -99, region: 'North America' }
        ];
        
        this.storkData = [];
        let birdIdCounter = 1000;
        
        majorRoutes.forEach(route => {
            const birdsPerRoute = Math.floor(1439 / majorRoutes.length) + (Math.random() * 50);
            
            for (let i = 0; i < birdsPerRoute; i++) {
                // Add variation to routes
                const startLatVar = route.startLat + (Math.random() - 0.5) * 10;
                const startLngVar = route.startLng + (Math.random() - 0.5) * 15;
                const endLatVar = route.endLat + (Math.random() - 0.5) * 8;
                const endLngVar = route.endLng + (Math.random() - 0.5) * 12;
                
                const distance = this.calculateDistance(startLatVar, startLngVar, endLatVar, endLngVar);
                
                this.storkData.push({
                    Bird_ID: `S${birdIdCounter++}`,
                    Species: 'Stork',
                    Start_Latitude: startLatVar,
                    Start_Longitude: startLngVar,
                    End_Latitude: endLatVar,
                    End_Longitude: endLngVar,
                    Flight_Distance_km: distance,
                    Flight_Duration_hours: distance / (35 + Math.random() * 15), // 35-50 kmh average
                    Migration_Start_Month: this.getRandomMonth(),
                    Migration_Success: Math.random() > 0.28 ? 'Success' : 'Failed', // 72% success rate
                    Weather_Condition: this.getRandomWeather(),
                    Flock_Size: Math.floor(Math.random() * 200) + 50,
                    Region: route.region
                });
            }
        });
        
        console.log(`Generated ${this.storkData.length} sample stork records`);
    }

    // Process sample data
    processSampleData() {
        this.createMigrationCorridors();
        this.createMigrationWaves();
        this.calculateDensityMap();
        
        return {
            totalRecords: this.storkData.length,
            corridors: this.migrationCorridors,
            waves: this.migrationWaves,
            densityMap: this.densityMap
        };
    }

    // Helper functions
    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Earth's radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    getRandomMonth() {
        const months = ['Mar', 'Apr', 'May', 'Aug', 'Sep', 'Oct'];
        return months[Math.floor(Math.random() * months.length)];
    }

    getRandomWeather() {
        const weather = ['Clear', 'Cloudy', 'Windy', 'Stormy', 'Rainy'];
        return weather[Math.floor(Math.random() * weather.length)];
    }

    // Get statistics for display
    getStatistics() {
        return {
            totalStorks: this.storkData.length,
            corridorCount: this.migrationCorridors.length,
            waveCount: this.migrationWaves.reduce((acc, season) => acc + season.waves.length, 0),
            averageDistance: this.storkData.reduce((acc, bird) => acc + (bird.Flight_Distance_km || 0), 0) / this.storkData.length,
            successRate: (this.storkData.filter(bird => bird.Migration_Success === 'Success').length / this.storkData.length) * 100
        };
    }
}

// Export for use in main.js
window.StorkMigrationProcessor = StorkMigrationProcessor;
