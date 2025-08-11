// Bird data
const birdData = {
    crane: {
        img: './images/birds/crane-flying.png',
        name: 'Crane',
        adjective: 'majestic',
        description: 'Cranes are among the most majestic and ancient birds on Earth, recognized for their towering height, long legs, and extended necks. They are known for their elaborate and synchronized mating dances, which include leaps, wing flutters, and graceful bows. Cranes typically inhabit wetlands, marshes, and grasslands and are revered in many cultures as symbols of longevity, fidelity, and peace. Their calls are loud and trumpet-like, resonating over long distances.',
        migrationFact: 'The Siberian Crane is a critically endangered migratory bird that embarks on an extraordinary journey of over 4,000 miles, flying from breeding grounds in the Russian tundra to wintering areas in India or Iran, relying heavily on intact wetland stopovers for rest and feeding.',
        migrationReasons: {
            predators: 23.29,
            breeding: 25.16,
            climate: 25.81,
            feeding: 25.74
        },
        stats: [
            'Average Height: 3.3 to 5 feet (100–150 cm)',
            'Average Weight: 6.6 to 15 pounds (3–7 kg)',
            'Wingspan: 6 to 8 feet (180–240 cm)',
            'Lifespan: 20 to 40 years (in the wild)',
            'Flight Speed: ~35 mph (56 km/h) in migration'
        ]
    },
    eagle: {
        img: './images/birds/eagle-flying.png',
        name: 'Eagle',
        adjective: 'powerful',
        description: 'Eagles are powerful, large birds of prey known for their broad wingspans, hooked beaks, and incredible vision—often said to be eight times sharper than that of humans. They inhabit a range of environments, from mountains and forests to open plains and coastal regions. Eagles are solitary hunters and feed on fish, small mammals, and other birds. Their nests, called eyries, are usually built high on cliffs or tall trees. They are often regarded as symbols of strength, freedom, and courage in various cultures and national emblems.',
        migrationFact: 'The Steppe Eagle is a migratory raptor that covers thousands of miles annually, traveling from Central Asia to Africa, navigating deserts and mountains to reach its wintering grounds.',
        migrationReasons: {
            predators: 24.47,
            breeding: 24.19,
            climate: 25.39,
            feeding: 25.95
        },
        stats: [
            'Average Height: 2.5 to 3.5 feet (75–105 cm)',
            'Average Weight: 6.5 to 14 pounds (3–6.5 kg)',
            'Wingspan: 6 to 8 feet (180–240 cm)',
            'Lifespan: 20 to 30 years (in the wild)',
            'Flight Speed: Up to 75 mph (120 km/h) when diving'
        ]
    },
    goose: {
        img: './images/birds/goose-flying.png',
        name: 'Goose',
        adjective: 'resilient',
        description: 'Geese are social, intelligent birds belonging to the waterfowl family. They have stout bodies, long necks, and webbed feet, and are commonly found near lakes, rivers, and fields. Known for their loyalty, geese often form long-term pair bonds and show strong protective behavior toward their young. They are grazers, feeding on grasses, grains, and aquatic plants. Geese communicate using a variety of honks and body movements and are known to travel in V-shaped flocks during flight, which reduces air resistance and conserves energy.',
        migrationFact: 'The Bar-headed Goose makes one of the most extreme migrations in the bird world, flying over the Himalayas at altitudes above 29,000 feet, enduring oxygen-thin air and freezing temperatures during its biannual journey between Central Asia and the Indian subcontinent.',
        migrationReasons: {
            predators: 27.31,
            breeding: 21.71,
            climate: 24.37,
            feeding: 26.61
        },
        stats: [
            'Average Height: 2.5 to 3.5 feet (75–105 cm)',
            'Average Weight: 6 to 14 pounds (2.7–6.3 kg)',
            'Wingspan: 4.2 to 6 feet (130–180 cm)',
            'Lifespan: 10 to 25 years',
            'Flight Speed: ~40–50 mph (64–80 km/h), faster with tailwind'
        ]
    },
    hawk: {
        img: './images/birds/hawk-flying.png',
        name: 'Hawk',
        adjective: 'keen-eyed',
        description: 'Hawks are medium-to-large birds of prey with keen eyesight, swift flight, and sharp talons, making them formidable hunters. They inhabit diverse environments, including forests, grasslands, and deserts. Hawks have a hooked beak for tearing flesh and are known for their ability to hover or glide silently before diving quickly to snatch prey. Some species, like the Red-tailed Hawk, are easily recognized by their distinct feather patterns and soaring behavior. Hawks play a crucial role in balancing ecosystems by controlling rodent and insect populations.',
        migrationFact: 'The Broad-winged Hawk undertakes a dramatic migration each year, flying up to 4,000 miles from North America to South America in massive flocks known as "kettles," which can number in the thousands, creating a spectacular aerial display during the fall season.',
        migrationReasons: {
            predators: 25.34,
            breeding: 22.88,
            climate: 26.64,
            feeding: 25.14
        },
        stats: [
            'Average Height: 18 to 26 inches (45–65 cm)',
            'Average Weight: 2 to 4 pounds (0.9–1.8 kg)',
            'Wingspan: 3.5 to 4.8 feet (110–145 cm)',
            'Lifespan: 10 to 20 years',
            'Flight Speed: Up to 120 mph (193 km/h) during a dive'
        ]
    },
    stork: {
        img: './images/birds/stork-flying.png',
        name: 'Stork',
        adjective: 'elegant',
        description: 'Storks are large, elegant birds with long necks, legs, and sturdy beaks, typically found in wetlands, meadows, and near rivers. They are known for their patient hunting style, often standing still for long periods before striking at fish, frogs, or insects. Unlike most birds, storks do not have a vocal song; instead, they communicate through bill-clattering displays. They build large nests, often reused and added to over many years. Storks hold symbolic significance in many cultures, frequently associated with fertility and birth.',
        migrationFact: 'The White Stork migrates annually from Europe to sub-Saharan Africa, using warm air thermals to soar across thousands of kilometers. Interestingly, they avoid large water bodies like the Mediterranean Sea and prefer land routes through the Middle East or Spain to conserve energy.',
        migrationReasons: {
            predators: 26.75,
            breeding: 27.10,
            climate: 22.10,
            feeding: 24.04
        },
        migrationPath: {
            startLat: 62.30154585,
            startLng: -111.4750695,
            endLat: 39.92109196,
            endLng: 47.96343633
        },
        stats: [
            'Average Height: 3.3 to 4.3 feet (100–130 cm)',
            'Average Weight: 5.5 to 10 pounds (2.5–4.5 kg)',
            'Wingspan: 6.6 to 7.5 feet (200–230 cm)',
            'Lifespan: 20 to 30 years',
            'Flight Speed: ~30–40 mph (48–64 km/h)'
        ]
    },
    swallow: {
        img: './images/birds/swallow-flying.png',
        name: 'Swallow',
        adjective: 'graceful',
        description: 'Swallows are small, slender birds with long pointed wings and deeply forked tails, renowned for their acrobatic flight and ability to catch insects mid-air. They have a distinctive appearance with glossy feathers and a pleasant, twittering song. Swallows are commonly seen near water bodies, open fields, and human dwellings, where they build mud nests under eaves or bridges. They are social birds and often travel and roost in large groups. Their streamlined bodies and swift movements make them excellent flyers, covering vast distances during migration.',
        migrationFact: 'The Barn Swallow performs one of the most impressive long-distance migrations, flying over 6,000 miles from breeding grounds in North America or Europe to wintering areas in South America or southern Africa, guided by instinct and environmental cues.',
        migrationReasons: {
            predators: 24.67,
            breeding: 26.14,
            climate: 24.88,
            feeding: 24.31
        },
        stats: [
            'Average Height: 5.9 to 7.5 inches (15–19 cm)',
            'Average Weight: 0.6 to 0.7 ounces (17–20 grams)',
            'Wingspan: 11.4 to 13.4 inches (29–34 cm)',
            'Lifespan: 4 to 8 years',
            'Flight Speed: ~25–35 mph (40–56 km/h), agile flier'
        ]
    },
    warbler: {
        img: './images/birds/warbler-flying.png',
        name: 'Warbler',
        adjective: 'energetic',
        description: 'Warblers are tiny, active songbirds, often brightly colored or patterned, known for their complex and musical songs. They inhabit woodlands, marshes, and shrublands, flitting constantly through foliage in search of insects and spiders. Despite their small size, warblers are incredibly energetic and agile, rarely staying still. Their songs play a crucial role in territory defense and mating. With hundreds of species across the globe, warblers vary widely in appearance and behavior.',
        migrationFact: 'The Blackpoll Warbler is a true marvel of endurance, making a nonstop transoceanic flight of nearly 2,000 miles from the northeastern United States to South America, often taking over three days of continuous flying across the Atlantic—one of the longest and most demanding migratory feats for a bird of its size.',
        migrationReasons: {
            predators: 24.35,
            breeding: 23.37,
            climate: 23.93,
            feeding: 28.34
        },
        stats: [
            'Average Height: 4.9 to 5.9 inches (12.5–15 cm)',
            'Average Weight: 0.4 to 0.5 ounces (11–15 grams)',
            'Wingspan: 7.5 to 9 inches (19–23 cm)',
            'Lifespan: 5 to 10 years',
            'Flight Speed: ~20–25 mph (32–40 km/h), increases during migration'
        ]
    }
};

let selectedBird = 'stork';
const allBirds = ['eagle', 'crane', 'goose', 'hawk', 'stork', 'swallow', 'warbler'];

// Function to update selected bird display and grid
function updateSelectedBird(birdType) {
    selectedBird = birdType;
    const bird = birdData[birdType];
    
    // Update selected bird display
    const selectedImage = document.querySelector('.selected-bird-image img');
    selectedImage.src = bird.img;
    selectedImage.alt = bird.name;
    
    document.querySelector('.migration-fact p').textContent = bird.migrationFact;
    document.querySelector('.bird-description-container h3').textContent = bird.name;
    document.querySelector('.bird-description-container p').textContent = bird.description;
    
    // Update stats
    const statsContainer = document.querySelector('.bird-stats ul');
    statsContainer.innerHTML = '';
    bird.stats.forEach(stat => {
        const [label, value] = stat.split(': ');
        const li = document.createElement('li');
        li.innerHTML = `<strong>${label}:</strong> ${value}`;
        statsContainer.appendChild(li);
    });

    // Update grid with birds excluding the selected one
    const availableBirds = allBirds.filter(bird => bird !== selectedBird);
    const birdGrid = document.querySelector('.bird-grid');
    
    birdGrid.innerHTML = availableBirds.map(bird => `
        <div class="bird-card-small" data-bird-type="${bird}">
            <div class="bird-image-container">
                <img 
                    src="${birdData[bird].img}" 
                    alt="${birdData[bird].name}"
                />
            </div>
            <h4>${birdData[bird].name}</h4>
        </div>
    `).join('');
    
    // Attach click events to new grid cards
    document.querySelectorAll('.bird-card-small').forEach(card => {
        card.addEventListener('click', () => {
            updateSelectedBird(card.dataset.birdType);
        });
    });
}

// Typewriter effect
function initTypewriter() {
    const text = 'Embark on an interactive journey exploring the fascinating world of bird migration. Discover the incredible distances traveled, challenges faced, and the wonders of these winged travelers.';
    const subtitle = document.querySelector('.main-subtitle');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            subtitle.textContent = text.substring(0, i + 1);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}

// Stats animation
function animateStats() {
    const targets = [7, 10000, 2800000, 45];
    const labels = ["Species\nTracked", "Birds\nMonitored", "Miles\nTraveled", "Countries\nCrossed"];
    const statsCards = document.querySelectorAll('.stats-card');
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    targets.forEach((target, index) => {
        const card = statsCards[index];
        const numberElement = card.querySelector('.stats-number');
        const increment = target / steps;
        let currentValue = 0;
        let stepCount = 0;
        
        const timer = setInterval(() => {
            stepCount++;
            if (stepCount >= steps) {
                const formattedNumber = formatNumber(target, index);
                numberElement.textContent = formattedNumber;
                clearInterval(timer);
            } else {
                currentValue += increment;
                const formattedNumber = formatNumber(Math.floor(currentValue), index);
                numberElement.textContent = formattedNumber;
            }
        }, interval);
    });
}

function formatNumber(num, index) {
    if (index === 1) { // Birds Monitored
        return num >= 1000 ? `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K` : num.toString();
    } else if (index === 2) { // Miles Traveled
        return num >= 1000000 ? `${(num / 1000000).toFixed(1)}M` : 
               num >= 1000 ? `${(num / 1000).toFixed(0)}K` : num.toString();
    } else {
        return num.toString();
    }
}

// Scroll indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (!scrollIndicator) return;
    
    function handleScroll() {
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const shouldShow = scrollTop < 20; // Reduced threshold for faster fading
        
        if (shouldShow) {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
            scrollIndicator.classList.remove('hidden');
        } else {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
            scrollIndicator.classList.add('hidden');
        }
    }
    
    // Add multiple event listeners for better compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    // Also trigger on window load and resize
    window.addEventListener('load', handleScroll);
    window.addEventListener('resize', handleScroll);
}

// Migration reasons mapping
const migrationReasonTitles = {
    predators: 'Avoid Predators',
    breeding: 'Breeding',
    climate: 'Climate Change',
    feeding: 'Feeding'
};

// Chart colors for each migration reason (matching website theme)
const chartColors = {
    predators: '#8B4513', // Main brown
    breeding: '#4682B4', // Main blue  
    climate: '#5F9EA0', // Cadet blue
    feeding: '#DEB887'  // Burlywood
};

// Function to create SVG path for donut slice
function createArcPath(centerX, centerY, outerRadius, innerRadius, startAngle, endAngle) {
    const startOuter = polarToCartesian(centerX, centerY, outerRadius, endAngle);
    const endOuter = polarToCartesian(centerX, centerY, outerRadius, startAngle);
    const startInner = polarToCartesian(centerX, centerY, innerRadius, endAngle);
    const endInner = polarToCartesian(centerX, centerY, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
        "M", startOuter.x, startOuter.y, 
        "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
        "L", endInner.x, endInner.y,
        "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
        "Z"
    ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

// Function to create and update the radial donut chart
function updateRadialChart() {
    const bird = birdData[selectedBird];
    const chartSvg = document.querySelector('.chart-svg');
    
    // Clear existing content
    chartSvg.innerHTML = '';
    
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 70;
    const innerRadius = 40; // Create donut hole
    const labelRadius = 90; // Position labels outside the donut
    let currentAngle = 0;
    
    // Create chart segments and external labels
    Object.entries(bird.migrationReasons).forEach(([reason, percentage]) => {
        const angle = (percentage / 100) * 360;
        const midAngle = currentAngle + (angle / 2);
        
        // Create SVG path for donut segment
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', createArcPath(centerX, centerY, outerRadius, innerRadius, currentAngle, currentAngle + angle));
        path.setAttribute('fill', chartColors[reason]);
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', '2');
        path.classList.add('chart-segment');
        path.setAttribute('data-reason', reason);
        
        // Add hover effects
        path.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
            this.style.transform = 'scale(1.05)';
            this.style.transformOrigin = `${centerX}px ${centerY}px`;
        });
        
        path.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
            this.style.transform = 'scale(1)';
        });
        
        chartSvg.appendChild(path);
        
        // Calculate position for external label
        const labelPosition = polarToCartesian(centerX, centerY, labelRadius, midAngle - 90);
        
        // Create line from donut to label
        const lineStartPos = polarToCartesian(centerX, centerY, outerRadius + 5, midAngle - 90);
        const lineEndPos = polarToCartesian(centerX, centerY, labelRadius - 15, midAngle - 90);
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', lineStartPos.x);
        line.setAttribute('y1', lineStartPos.y);
        line.setAttribute('x2', lineEndPos.x);
        line.setAttribute('y2', lineEndPos.y);
        line.setAttribute('stroke', '#FFFFFF');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('opacity', '0.7');
        
        chartSvg.appendChild(line);
        
        // Create horizontal label with reason name and percentage
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', labelPosition.x);
        label.setAttribute('y', labelPosition.y);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('dominant-baseline', 'middle');
        label.setAttribute('fill', '#F5F5DC');
        label.setAttribute('font-size', '10');
        label.setAttribute('font-weight', 'bold');
        label.setAttribute('font-family', 'Georgia, serif');
        label.style.filter = 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))';
        // Counter-rotate to keep text horizontal despite chart rotation
        label.setAttribute('transform', `rotate(90, ${labelPosition.x}, ${labelPosition.y})`);
        
        // Create horizontal label combining reason name and percentage
        label.textContent = `${migrationReasonTitles[reason]}: ${percentage.toFixed(1)}%`;
        
        chartSvg.appendChild(label);
        currentAngle += angle;
    });
}

// Function to show journey section
function showJourneySection() {
    const bird = birdData[selectedBird];
    const journeySection = document.querySelector('.journey-section');
    
    // Update journey titles
    document.querySelector('.journey-title').textContent = `The ${bird.name}'s Journey`;
    document.querySelector('.journey-subtitle').textContent = `Follow the ${bird.adjective} ${bird.name.toLowerCase()} on its incredible migration across continents`;
    
    // Update the radial chart with current bird data
    updateRadialChart();
    
    // Show the journey section
    journeySection.classList.add('visible');
    
    // Scroll to journey section
    journeySection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to show migration path section
function showMigrationPathSection() {
    const bird = birdData[selectedBird];
    const migrationPathSection = document.querySelector('.migration-path-section');
    
    // Update migration path title with current bird
    document.querySelector('.migration-path-title').textContent = `${bird.name}'s Migration Path`;
    
    // Show the migration path section
    migrationPathSection.classList.add('visible');
    
    // Initialize the 3D globe
    setTimeout(() => {
        init3DGlobe();
    }, 500);
    
    // Scroll to migration path section
    migrationPathSection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Three.js 3D Globe Variables
let scene, camera, renderer, globe, controls;
let migrationPath, startMarker, endMarker, currentPositionMarker;
let globeInitialized = false;
let animationActive = true; // Enable continuous rotation
let currentEarthStyle = 'realistic';
let migrationCurve = null;
let totalDistance = 0;

// Earth texture loading function using Ghibli style only
function createGhibliEarthTexture() {
    const textureLoader = new THREE.TextureLoader();
    return textureLoader.load('./images/earth-textures/earth-blue-marble.jpg');
}

// Initialize the 3D Earth Globe
function init3DGlobe() {
    if (globeInitialized) return;
    
    const container = document.getElementById('earth-globe-container');
    if (!container) return;
    
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Add OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.5;
    controls.maxDistance = 8;
    
    // Create Earth sphere
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Use Ghibli Earth texture
    const earthTexture = createGhibliEarthTexture();
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 0.1
    });
    
    globe = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(globe);
    
    // Add even lighting from all sides
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);
    
    // Add migration path for current bird
    addMigrationPath();
    
    // Hide loading text
    const loadingText = container.querySelector('.loading-text');
    if (loadingText) {
        loadingText.style.display = 'none';
    }
    
    // Update migration info
    updateMigrationInfo();
    
    // Start animation loop
    animate();
    
    globeInitialized = true;
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

// Convert lat/lng to 3D coordinates
function latLngTo3D(lat, lng, radius = 1) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    
    return new THREE.Vector3(x, y, z);
}

// Add migration path
function addMigrationPath() {
    const bird = birdData[selectedBird];
    if (!bird.migrationPath) return;
    
    const { startLat, startLng, endLat, endLng } = bird.migrationPath;
    
    // Convert coordinates to 3D positions
    const startPos = latLngTo3D(startLat, startLng, 1.02);
    const endPos = latLngTo3D(endLat, endLng, 1.02);
    
    // Calculate total distance and update slider
    totalDistance = calculateDistance(startLat, startLng, endLat, endLng);
    updateSliderLabels();
    
    // Create start marker (attached to globe so it rotates with Earth)
    const startGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const startMaterial = new THREE.MeshBasicMaterial({ color: 0xFF6B6B });
    startMarker = new THREE.Mesh(startGeometry, startMaterial);
    startMarker.position.copy(startPos);
    globe.add(startMarker); // Add to globe instead of scene
    
    // Create end marker (attached to globe so it rotates with Earth)
    const endGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const endMaterial = new THREE.MeshBasicMaterial({ color: 0x4ECDC4 });
    endMarker = new THREE.Mesh(endGeometry, endMaterial);
    endMarker.position.copy(endPos);
    globe.add(endMarker); // Add to globe instead of scene
    
    // Create curved path (attached to globe so it rotates with Earth)
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    midPoint.normalize().multiplyScalar(1.5); // Arc outward
    
    migrationCurve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
    const points = migrationCurve.getPoints(50);
    const pathGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const pathMaterial = new THREE.LineBasicMaterial({ 
        color: 0xFFD93D,
        linewidth: 3,
        transparent: true,
        opacity: 0.8
    });
    
    migrationPath = new THREE.Line(pathGeometry, pathMaterial);
    globe.add(migrationPath); // Add to globe instead of scene so it rotates with Earth
    
    // Create current position marker (blinking red dot) - attached to globe so it rotates with Earth
    const currentPosGeometry = new THREE.SphereGeometry(0.025, 16, 16);
    const currentPosMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFF0000,
        transparent: true
    });
    currentPositionMarker = new THREE.Mesh(currentPosGeometry, currentPosMaterial);
    currentPositionMarker.position.copy(startPos);
    currentPositionMarker.material.transparent = true;
    currentPositionMarker.visible = true;
    globe.add(currentPositionMarker); // Add to globe instead of scene so it rotates with Earth
    
    // Add blinking animation class equivalent for 3D
    animateBlinkingMarker();
    
    // Setup slider event listener
    setupSliderControl();
}

// Update migration info text
function updateMigrationInfo() {
    const bird = birdData[selectedBird];
    
    if (bird.migrationPath) {
        const { startLat, startLng, endLat, endLng } = bird.migrationPath;
        const distance = calculateDistance(startLat, startLng, endLat, endLng);
        
        // Update individual stat fields
        const originElement = document.getElementById('origin-location');
        const destinationElement = document.getElementById('destination-location');
        const totalDistanceElement = document.getElementById('total-distance-stat');
        
        if (originElement) {
            originElement.textContent = `${startLat.toFixed(1)}°N, ${Math.abs(startLng).toFixed(1)}°W`;
        }
        
        if (destinationElement) {
            destinationElement.textContent = `${endLat.toFixed(1)}°N, ${endLng.toFixed(1)}°E`;
        }
        
        if (totalDistanceElement) {
            totalDistanceElement.textContent = `${Math.round(distance)} miles (${Math.round(distance * 1.609)} km)`;
        }
    } else {
        // Handle birds without migration path data
        const originElement = document.getElementById('origin-location');
        const destinationElement = document.getElementById('destination-location');
        const totalDistanceElement = document.getElementById('total-distance-stat');
        
        if (originElement) originElement.textContent = 'Data not available';
        if (destinationElement) destinationElement.textContent = 'Data not available';
        if (totalDistanceElement) totalDistanceElement.textContent = 'Data not available';
    }
}

// Calculate distance between two lat/lng points (Haversine formula)
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    if (controls) {
        controls.update();
    }
    
    if (globe && animationActive) {
        globe.rotation.y += 0.002;
    }
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// Handle window resize
function onWindowResize() {
    if (!camera || !renderer) return;
    
    const container = document.getElementById('earth-globe-container');
    if (!container) return;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// Update slider labels with total distance
function updateSliderLabels() {
    const totalDistanceElement = document.getElementById('total-distance');
    if (totalDistanceElement) {
        totalDistanceElement.textContent = `Destination (${Math.round(totalDistance * 1.609)} km)`;
    }
}

// Animate the blinking marker
function animateBlinkingMarker() {
    if (!currentPositionMarker) return;
    
    let blinkTime = 0;
    function blink() {
        blinkTime += 0.05;
        currentPositionMarker.material.opacity = 0.3 + 0.7 * (Math.sin(blinkTime * 3) + 1) / 2;
        requestAnimationFrame(blink);
    }
    blink();
}

// Setup slider control functionality
function setupSliderControl() {
    const slider = document.getElementById('migration-slider');
    if (!slider) return;
    
    slider.addEventListener('input', function(e) {
        const progress = parseFloat(e.target.value) / 100; // 0 to 1
        updateMarkerPosition(progress);
    });
}

// Update marker position based on slider progress
function updateMarkerPosition(progress) {
    if (!migrationCurve || !currentPositionMarker) return;
    
    // Get position along the curve
    const position = migrationCurve.getPoint(progress);
    currentPositionMarker.position.copy(position);
    
    // Update info text with current progress
    const currentDistance = totalDistance * progress;
    const infoText = document.getElementById('migration-info-text');
    const bird = birdData[selectedBird];
    
    if (infoText) {
        infoText.textContent = `${bird.name} has traveled ${Math.round(currentDistance)} miles (${Math.round(currentDistance * 1.609)} km) of its ${Math.round(totalDistance)}-mile journey. Progress: ${Math.round(progress * 100)}%`;
    }
}

function createHTMLStructure() {
    const root = document.getElementById('root');
    root.innerHTML = `
        <div class="background-container"></div>
        <div class="scroll-indicator">
            <div class="mouse-icon"></div>
            <div class="scroll-text">Scroll Down</div>
        </div>
        
        <!-- Landing Page -->
        <div class="content-container">
            <div class="hero-section">
                <img 
                    src="./images/backgrounds/earth-with-migrating-birds.png" 
                    alt="Earth with migrating birds" 
                    class="earth-image"
                />
                <div style="position: relative; width: 100%; display: flex; flex-direction: column; align-items: center;">
                    <h1 class="main-title">Wings of Migration</h1>
                    <div class="flying-bird"></div>
                </div>
                <p class="main-subtitle"></p>
                <div class="stats-container">
                    <div class="stats-card">
                        <div class="stats-number">0</div>
                        <div class="stats-label" style="white-space: pre-line;">Species
Tracked</div>
                    </div>
                    <div class="stats-card">
                        <div class="stats-number">0</div>
                        <div class="stats-label" style="white-space: pre-line;">Birds
Monitored</div>
                    </div>
                    <div class="stats-card">
                        <div class="stats-number">0</div>
                        <div class="stats-label" style="white-space: pre-line;">Miles
Traveled</div>
                    </div>
                    <div class="stats-card">
                        <div class="stats-number">0</div>
                        <div class="stats-label" style="white-space: pre-line;">Countries
Crossed</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bird Selection Page -->
        <div class="bird-selection-section">
            <h2 class="bird-selection-title">Select a Bird Species to Explore</h2>
            <div class="bird-selection-container">
                <!-- Selected Bird Image -->
                <div class="selected-bird-image">
                    <img 
                        src="./images/birds/stork-flying.png" 
                        alt="Stork"
                    />
                    <div class="migration-fact">
                        <h4>Migration Fact</h4>
                        <p></p>
                    </div>
                </div>

                <!-- Bird Description -->
                <div class="bird-description-container">
                    <div class="bird-description-content">
                        <h3>Stork</h3>
                        <p></p>
                        
                        <div class="bird-stats">
                            <ul>
                            </ul>
                        </div>
                    </div>
                    
                    <button class="begin-journey-btn">
                        Begin Journey
                    </button>
                </div>

                <!-- Bird Grid -->
                <div class="bird-grid-container">
                    <div class="bird-grid">
                        <!-- Grid will be populated by JavaScript -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Journey Section -->
        <div class="journey-section">
            <h1 class="journey-title">The Stork's Journey</h1>
            <p class="journey-subtitle">Follow the elegant stork on its incredible migration across continents</p>
            
            <div class="journey-content">
                <!-- Why Birds Migrate -->
                <div class="why-migrate-container">
                    <h3>Why Birds Migrate</h3>
                    <p class="why-migrate-intro">Every year, billions of birds embark on extraordinary journeys across continents. Their migrations are driven by fundamental survival needs that have shaped their behavior for millions of years.</p>
                    
                    <div class="migration-reasons-grid">
                        <div class="reason-row">
                            <img src="./images/migration-reasons/migration-reason-breeding.png" alt="Breeding" class="reason-image">
                            <div class="reason-text"><strong>Breeding</strong> – Seeking safe, resource-rich nesting grounds</div>
                        </div>
                        
                        <div class="reason-row">
                            <img src="./images/migration-reasons/migration-reason-feeding.png" alt="Feeding" class="reason-image">
                            <div class="reason-text"><strong>Feeding</strong> – Chasing seasonal food sources across regions</div>
                        </div>
                        
                        <div class="reason-row">
                            <img src="./images/migration-reasons/migration-reason-climate-change.png" alt="Climate Change" class="reason-image">
                            <div class="reason-text"><strong>Climate Change</strong> – Reacting to changing global temperatures</div>
                        </div>
                        
                        <div class="reason-row">
                            <img src="./images/migration-reasons/migration-reason-predators.png" alt="Avoid Predators" class="reason-image">
                            <div class="reason-text"><strong>Avoid Predators</strong> – Escaping predators or human disturbance</div>
                        </div>
                    </div>
                </div>

                <!-- Chart Container -->
                <div class="chart-container">
                    <div class="radial-chart">
                        <svg class="chart-svg" viewBox="0 0 200 200">
                            <!-- Chart segments will be generated by JavaScript -->
                        </svg>
                    </div>
                    
                    <button class="continue-journey-btn">
                        Continue Journey
                    </button>
                </div>
            </div>
        </div>

        <!-- Migration Path Section -->
        <div class="migration-path-section">
            <h1 class="migration-path-title">Stork Migration Path</h1>
            
            <div class="migration-path-content">
                <!-- Left Side: Migration Journey Timeline -->
                <div class="left-content-container">
                    <div class="timeline-container">
                        <h3 class="timeline-title">Migration Journey Timeline</h3>
                        <div class="timeline-content">
                            <!-- Timeline content will be added here -->
                        </div>
                    </div>
                </div>
                
                <!-- Right Side: 3D Globe and Controls -->
                <div class="right-content-container">
                    <div class="migration-controls">
                        <div class="slider-container">
                            <div class="slider-labels">
                                <span>Origin (0 km)</span>
                                <span id="total-distance">Destination (0 km)</span>
                            </div>
                            <input 
                                type="range" 
                                id="migration-slider" 
                                class="migration-slider" 
                                min="0" 
                                max="100" 
                                value="0"
                            />
                        </div>
                    </div>
                    
                    <div class="earth-globe-container" id="earth-globe-container">
                        <div class="loading-text">Loading Earth Globe...</div>
                    </div>
                    
                    <div class="migration-info">
                        <h4>Migration Route</h4>
                        <div class="migration-stats">
                            <div class="stat-item">
                                <span class="stat-label">Origin:</span>
                                <span class="stat-value" id="origin-location">Loading...</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Destination:</span>
                                <span class="stat-value" id="destination-location">Loading...</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Distance:</span>
                                <span class="stat-value" id="total-distance-stat">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the HTML structure
    createHTMLStructure();
    
    // Initialize functionality
    initTypewriter();
    animateStats();
    initScrollIndicator();
    updateSelectedBird('stork');
    
    // Add event listener to Begin Journey button
    document.querySelector('.begin-journey-btn').addEventListener('click', showJourneySection);
    
    // Add event listener to Continue Journey button
    document.querySelector('.continue-journey-btn').addEventListener('click', showMigrationPathSection);
});
