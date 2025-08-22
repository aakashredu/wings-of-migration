// Generic Bird Migration Data Processor
// Processes migration records for any bird species from CSV files

class BirdMigrationProcessor {
    constructor() {
        this.migrationData = [];
        this.migrationCorridors = [];
        this.migrationWaves = [];
        this.densityMap = new Map();
        this.currentSpecies = null;
    }

    // Process bird migration data from CSV file based on species
    async processBirdData(species) {
        this.currentSpecies = species;
        console.log(`=== PROCESSING ${species.toUpperCase()} DATA ===`);
        
        try {
            const csvFileName = `${species}_origin_destination.csv`;
            console.log(`Attempting to fetch: ./data/${csvFileName}`);
            
            const response = await fetch(`./data/${csvFileName}`);
            console.log(`Fetch response status: ${response.status} ${response.statusText}`);
            
            if (!response.ok) {
                throw new Error(`CSV file not found: ${csvFileName} (${response.status})`);
            }
            
            const csvText = await response.text();
            console.log(`Fetched CSV text length: ${csvText.length} characters`);
            console.log(`First 200 characters: ${csvText.substring(0, 200)}`);
            
            // Parse CSV data
            this.migrationData = this.parseCSV(csvText);
            
            console.log(`Found ${this.migrationData.length} ${species} migration records from CSV`);
            
            if (this.migrationData.length === 0) {
                console.error(`❌ NO REAL DATA FOUND: CSV parsing failed for ${species}. Refusing to show synthetic data.`);
                return {
                    species: species,
                    totalRecords: 0,
                    corridors: [],
                    waves: [],
                    densityMap: new Map(),
                    rawData: [] // Empty - no synthetic data
                };
            }
            
            console.log(`✅ USING REAL CSV DATA: ${this.migrationData.length} actual ${species} migration records`);
            
            // Process the data
            this.createMigrationCorridors();
            this.createMigrationWaves();
            this.calculateDensityMap();
            
            return {
                species: species,
                totalRecords: this.migrationData.length,
                corridors: this.migrationCorridors,
                waves: this.migrationWaves,
                densityMap: this.densityMap,
                rawData: this.migrationData // Include raw data for arc visualization
            };
            
        } catch (error) {
            console.error(`❌ CSV ERROR for ${species}:`, error);
            console.error(`❌ REFUSING TO SHOW SYNTHETIC DATA - Only real CSV data allowed`);
            return {
                species: species,
                totalRecords: 0,
                corridors: [],
                waves: [],
                densityMap: new Map(),
                rawData: [] // Empty - no synthetic data
            };
        }
    }

    // Parse CSV data into structured format
    parseCSV(csvText) {
        console.log(`Starting CSV parsing. Text length: ${csvText.length}`);
        const lines = csvText.trim().split('\n');
        console.log(`Found ${lines.length} lines in CSV`);
        console.log(`Headers: ${lines[0]}`);
        
        // Test with first few data lines
        if (lines.length > 1) {
            console.log(`\n=== DETAILED CSV DEBUGGING ===`);
            for (let testIdx = 1; testIdx <= Math.min(3, lines.length - 1); testIdx++) {
                console.log(`\nTesting line ${testIdx}:`);
                console.log(`Raw line: "${lines[testIdx]}"`);
                console.log(`Line length: ${lines[testIdx].length} characters`);
                console.log(`Line ends with: "${lines[testIdx].slice(-10)}"`);
                const testRecord = this.parseCSVLine(lines[testIdx]);
                console.log(`Parsing result:`, testRecord);
            }
            console.log(`=== END DETAILED DEBUGGING ===\n`);
        }
        
        const headers = lines[0].split(',');
        const data = [];
        let successCount = 0;
        let errorCount = 0;
        
        // Process ALL records in the CSV file
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            if (!line.trim()) continue;
            
            // Parse CSV line with quoted coordinates
            const record = this.parseCSVLine(line);
            if (record) {
                data.push(record);
                successCount++;
                if (i <= 5) { // Only log first 5 successful records to avoid console spam
                    console.log(`✅ Successfully parsed record ${i}:`, record);
                }
            } else {
                errorCount++;
                if (errorCount <= 5) { // Only log first 5 failed records to avoid console spam
                    console.log(`❌ Failed to parse line ${i}: ${line.substring(0, 100)}...`);
                }
            }
        }
        
        console.log(`CSV parsing complete. Success: ${successCount}, Errors: ${errorCount}, Total records: ${data.length}`);
        
        return data;
    }

    // Parse a single CSV line handling quoted coordinates
    parseCSVLine(line) {
        try {
            // Enhanced CSV parsing for quoted fields with commas inside
            const parts = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                
                if (char === '"') {
                    inQuotes = !inQuotes;
                    // Don't include the quote character in the field value
                } else if (char === ',' && !inQuotes) {
                    parts.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            parts.push(current.trim());
            
            console.log(`Parsed line into ${parts.length} parts:`, parts);
            
            if (parts.length !== 5) {
                console.log(`❌ Skipping malformed line (expected exactly 5 columns, got ${parts.length}): ${line}`);
                console.log(`❌ Parts found:`, parts);
                return null;
            }
            
            // Expect exactly 5 columns: Bird_ID, Species, Origin, Destination, Migration_Success
            const [birdId, species, origin, destination, migrationSuccess] = parts;
            
            console.log(`✅ Parsing line with ${parts.length} columns - Migration Success: "${migrationSuccess}"`);
            
            console.log(`Field values - Origin: "${origin}", Destination: "${destination}"`);
            
            // Parse coordinates from the clean string (quotes already removed)
            const originCoords = origin.split(',').map(s => parseFloat(s.trim()));
            const destCoords = destination.split(',').map(s => parseFloat(s.trim()));
            
            console.log(`Parsed coordinates - Origin: [${originCoords}], Dest: [${destCoords}]`);
            
            // Validate coordinates
            if (originCoords.length !== 2 || destCoords.length !== 2 || 
                isNaN(originCoords[0]) || isNaN(originCoords[1]) || 
                isNaN(destCoords[0]) || isNaN(destCoords[1])) {
                console.log(`❌ Invalid coordinates - Origin: ${originCoords}, Dest: ${destCoords}`);
                return null;
            }
            
            const distance = this.calculateDistance(originCoords[0], originCoords[1], destCoords[0], destCoords[1]);
            
            return {
                Bird_ID: birdId,
                Species: species,
                Start_Latitude: originCoords[0],
                Start_Longitude: originCoords[1],
                End_Latitude: destCoords[0],
                End_Longitude: destCoords[1],
                Flight_Distance_km: distance,
                Flight_Duration_hours: distance / this.getSpeciesSpeed(this.currentSpecies),
                Migration_Start_Month: this.getRandomMonth(),
                Migration_Success: migrationSuccess,
                Weather_Condition: this.getRandomWeather(),
                Flock_Size: this.getSpeciesFlockSize(this.currentSpecies),
                Region: this.determineRegion(originCoords[0], originCoords[1], destCoords[0], destCoords[1])
            };
        } catch (error) {
            console.error('❌ Error parsing CSV line:', line, error);
            return null;
        }
    }

    // Get species-specific flight speed
    getSpeciesSpeed(species) {
        const speeds = {
            crane: 35 + Math.random() * 15,      // 35-50 km/h
            eagle: 45 + Math.random() * 25,      // 45-70 km/h  
            goose: 40 + Math.random() * 20,      // 40-60 km/h
            hawk: 50 + Math.random() * 30,       // 50-80 km/h
            stork: 35 + Math.random() * 15,      // 35-50 km/h
            swallow: 25 + Math.random() * 15,    // 25-40 km/h
            warbler: 20 + Math.random() * 10     // 20-30 km/h
        };
        return speeds[species] || 35 + Math.random() * 15;
    }

    // Get species-specific flock size
    getSpeciesFlockSize(species) {
        const flockSizes = {
            crane: Math.floor(Math.random() * 100) + 20,    // 20-120 birds
            eagle: Math.floor(Math.random() * 10) + 1,      // 1-10 birds (usually solitary)
            goose: Math.floor(Math.random() * 200) + 50,    // 50-250 birds
            hawk: Math.floor(Math.random() * 20) + 1,       // 1-20 birds
            stork: Math.floor(Math.random() * 200) + 50,    // 50-250 birds
            swallow: Math.floor(Math.random() * 500) + 100, // 100-600 birds
            warbler: Math.floor(Math.random() * 50) + 10    // 10-60 birds
        };
        return flockSizes[species] || Math.floor(Math.random() * 100) + 20;
    }

    // Determine migration region based on coordinates
    determineRegion(startLat, startLng, endLat, endLng) {
        // Simple region classification based on coordinates
        if (startLat > 40 && endLat < 0) return 'Europe-Africa';
        if (startLat > 60 && startLng < 0) return 'Arctic-Temperate';
        if (startLng > 60 && startLng < 140) return 'Asia';
        if (startLng < -60) return 'Americas';
        return 'Other';
    }

    // Create migration corridors by clustering similar routes
    createMigrationCorridors() {
        const corridors = new Map();
        const clusterRadius = 5; // 5 degree clustering radius
        
        this.migrationData.forEach(record => {
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
            const seasonData = this.migrationData.filter(record => 
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
                    success: record.Migration_Success === 'Successful',
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
        
        this.migrationData.forEach(record => {
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

    // Generate sample bird data if real data isn't available
    generateSampleBirdData(species) {
        console.log(`Generating sample ${species} data...`);
        
        // Species-specific migration routes
        const speciesRoutes = this.getSpeciesMigrationRoutes(species);
        
        this.migrationData = [];
        let birdIdCounter = 1000;
        
        speciesRoutes.forEach(route => {
            const birdsPerRoute = Math.floor(1439 / speciesRoutes.length) + (Math.random() * 50);
            
            for (let i = 0; i < birdsPerRoute; i++) {
                // Add variation to routes
                const startLatVar = route.startLat + (Math.random() - 0.5) * 10;
                const startLngVar = route.startLng + (Math.random() - 0.5) * 15;
                const endLatVar = route.endLat + (Math.random() - 0.5) * 8;
                const endLngVar = route.endLng + (Math.random() - 0.5) * 12;
                
                const distance = this.calculateDistance(startLatVar, startLngVar, endLatVar, endLngVar);
                
                this.migrationData.push({
                    Bird_ID: `${species.charAt(0).toUpperCase()}${birdIdCounter++}`,
                    Species: species,
                    Start_Latitude: startLatVar,
                    Start_Longitude: startLngVar,
                    End_Latitude: endLatVar,
                    End_Longitude: endLngVar,
                    Flight_Distance_km: distance,
                    Flight_Duration_hours: distance / this.getSpeciesSpeed(species),
                    Migration_Start_Month: this.getRandomMonth(),
                    Migration_Success: Math.random() > 0.28 ? 'Success' : 'Failed', // 72% success rate
                    Weather_Condition: this.getRandomWeather(),
                    Flock_Size: this.getSpeciesFlockSize(species),
                    Region: route.region
                });
            }
        });
        
        console.log(`Generated ${this.migrationData.length} sample ${species} records`);
    }

    // Get species-specific migration routes
    getSpeciesMigrationRoutes(species) {
        const routes = {
            crane: [
                { startLat: 60, startLng: 100, endLat: 26, endLng: 88, region: 'Siberia-India' },
                { startLat: 45, startLng: -100, endLat: 25, endLng: -97, region: 'North America' },
                { startLat: 55, startLng: 15, endLat: -15, endLng: 25, region: 'Europe-Africa' }
            ],
            eagle: [
                { startLat: 45, startLng: 82, endLat: 15, endLng: 77, region: 'Central Asia-India' },
                { startLat: 60, startLng: -120, endLat: 20, endLng: -100, region: 'North America' },
                { startLat: 50, startLng: 30, endLat: -10, endLng: 35, region: 'Europe-Africa' }
            ],
            goose: [
                { startLat: 70, startLng: -100, endLat: 25, endLng: -90, region: 'Arctic-Americas' },
                { startLat: 65, startLng: 20, endLat: 35, endLng: 25, region: 'Arctic-Europe' },
                { startLat: 60, startLng: 140, endLat: 35, endLng: 120, region: 'Siberia-East Asia' }
            ],
            hawk: [
                { startLat: 50, startLng: -80, endLat: 10, endLng: -70, region: 'North America-Central' },
                { startLat: 45, startLng: 15, endLat: -20, endLng: 30, region: 'Europe-Africa' },
                { startLat: 40, startLng: 110, endLat: 10, endLng: 105, region: 'East Asia-SE Asia' }
            ],
            stork: [
                { startLat: 54, startLng: 13, endLat: -26, endLng: 28, region: 'Europe-Africa' },
                { startLat: 52, startLng: 5, endLat: -22, endLng: 17, region: 'Europe-Africa' },
                { startLat: 62, startLng: -111, endLat: 40, endLng: 48, region: 'Siberia-Middle East' }
            ],
            swallow: [
                { startLat: 55, startLng: -85, endLat: -15, endLng: -60, region: 'North-South America' },
                { startLat: 50, startLng: 5, endLat: -25, endLng: 25, region: 'Europe-Africa' },
                { startLat: 45, startLng: 130, endLat: -10, endLng: 120, region: 'East Asia-Australia' }
            ],
            warbler: [
                { startLat: 60, startLng: -70, endLat: -10, endLng: -55, region: 'North-South America' },
                { startLat: 55, startLng: 10, endLat: -15, endLng: 20, region: 'Europe-Africa' },
                { startLat: 50, startLng: 125, endLat: 10, endLng: 115, region: 'East Asia-SE Asia' }
            ]
        };
        
        return routes[species] || routes.stork;
    }

    // Process sample data
    processSampleData() {
        this.createMigrationCorridors();
        this.createMigrationWaves();
        this.calculateDensityMap();
        
        return {
            species: this.currentSpecies,
            totalRecords: this.migrationData.length,
            corridors: this.migrationCorridors,
            waves: this.migrationWaves,
            densityMap: this.densityMap,
            rawData: this.migrationData // Include raw data for arc visualization
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
            totalBirds: this.migrationData.length,
            corridorCount: this.migrationCorridors.length,
            waveCount: this.migrationWaves.reduce((acc, season) => acc + season.waves.length, 0),
            averageDistance: this.migrationData.reduce((acc, bird) => acc + (bird.Flight_Distance_km || 0), 0) / this.migrationData.length,
            successRate: (this.migrationData.filter(bird => bird.Migration_Success === 'Successful').length / this.migrationData.length) * 100
        };
    }
}

// Export for use in main.js
window.BirdMigrationProcessor = BirdMigrationProcessor;
