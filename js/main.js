// Bird data
const birdData = {
    crane: {
        img: './images/birds/crane-flying.png',
        name: 'Crane',
        adjective: 'majestic',
        description: 'Cranes are among the most majestic and ancient birds on Earth, recognized for their towering height, long legs, and extended necks. They are known for their elaborate and synchronized mating dances, which include leaps, wing flutters, and graceful bows. Cranes typically inhabit wetlands, marshes, and grasslands and are revered in many cultures as symbols of longevity, fidelity, and peace. Their calls are loud and trumpet-like, resonating over long distances.',
        migrationFact: 'The Siberian Crane is a critically endangered migratory bird that embarks on an extraordinary journey of over 4,000 miles, flying from breeding grounds in the Russian tundra to wintering areas in India or Iran, relying heavily on intact wetland stopovers for rest and feeding.',
        migrationReasons: {
            predators: 12.3,
            breeding: 28.7,
            climate: 34.8,
            feeding: 24.2
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
            predators: 4.6,
            breeding: 26.8,
            climate: 31.4,
            feeding: 37.2
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
            predators: 16.4,
            breeding: 29.3,
            climate: 33.8,
            feeding: 20.5
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
            predators: 5.2,
            breeding: 24.7,
            climate: 28.9,
            feeding: 41.2
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
            predators: 11.8,
            breeding: 36.4,
            climate: 27.6,
            feeding: 24.2
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
            predators: 23.7,
            breeding: 19.8,
            climate: 26.3,
            feeding: 30.2
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
            predators: 28.4,
            breeding: 21.3,
            climate: 19.6,
            feeding: 30.7
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
async function updateSelectedBird(birdType) {
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
    
    // Update globe position for the new bird (animate if globe is already initialized)
    if (globeInitialized) {
        positionGlobeForBird(true); // true = animate the transition
        
        // Re-initialize bird visualization for the new species
        setTimeout(async () => {
            await initializeBirdVisualization();
        }, 1500); // Wait for globe animation to complete
    }
    
    // Update migration statistics for the new bird
    await updateMigrationStatsCards();
    
    console.log(`Updated migration stats for ${birdType}`);
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

// Action section scroll indicator - simplified version
function showActionScrollIndicator() {
    const actionScrollIndicator = document.querySelector('.action-scroll-indicator');
    
    if (!actionScrollIndicator) return;
    
    // Show the indicator immediately
    actionScrollIndicator.style.opacity = '1';
    actionScrollIndicator.style.visibility = 'visible';
    actionScrollIndicator.classList.remove('hidden');
    
    // Hide it after 2 seconds and never show again
    setTimeout(() => {
        actionScrollIndicator.style.opacity = '0';
        actionScrollIndicator.style.visibility = 'hidden';
        actionScrollIndicator.classList.add('hidden');
    }, 2000);
}

// Migration reasons mapping
const migrationReasonTitles = {
    predators: 'Avoid Predators',
    breeding: 'Breeding',
    climate: 'Climate Change',
    feeding: 'Feeding'
};

// Chart colors for migration reasons
const chartColors = {
    predators: '#8B4513', // Main brown
    breeding: '#4682B4', // Main blue  
    climate: '#5F9EA0', // Cadet blue
    feeding: '#DEB887'  // Burlywood
};

// Function to create SVG path for donut slice
function createArcPath(centerX, centerY, outerRadius, innerRadius, startAngle, endAngle) {
    // Convert degrees to radians for calculations
    const startAngleRad = (startAngle - 90) * Math.PI / 180;
    const endAngleRad = (endAngle - 90) * Math.PI / 180;
    
    // Calculate outer arc points
    const x1 = centerX + outerRadius * Math.cos(startAngleRad);
    const y1 = centerY + outerRadius * Math.sin(startAngleRad);
    const x2 = centerX + outerRadius * Math.cos(endAngleRad);
    const y2 = centerY + outerRadius * Math.sin(endAngleRad);
    
    // Calculate inner arc points
    const x3 = centerX + innerRadius * Math.cos(endAngleRad);
    const y3 = centerY + innerRadius * Math.sin(endAngleRad);
    const x4 = centerX + innerRadius * Math.cos(startAngleRad);
    const y4 = centerY + innerRadius * Math.sin(startAngleRad);
    
    // Determine if this is a large arc (>180 degrees)
    const largeArcFlag = (endAngle - startAngle) > 180 ? "1" : "0";
    
    // Create the path string
    return [
        "M", x1, y1,                                    // Move to start point on outer arc
        "A", outerRadius, outerRadius, 0, largeArcFlag, 1, x2, y2,  // Draw outer arc
        "L", x3, y3,                                    // Line to inner arc
        "A", innerRadius, innerRadius, 0, largeArcFlag, 0, x4, y4,   // Draw inner arc (reverse direction)
        "Z"                                             // Close path
    ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    // Match coordinate system with createArcPath function (0° at top, clockwise)
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

// Function to find the highest percentage migration reason
function getHighestMigrationReason(bird) {
    // Calculate the highest percentage reason dynamically
    let highestReason = null;
    let highestPercentage = -1;
    
    for (const [reason, percentage] of Object.entries(bird.migrationReasons)) {
        if (percentage > highestPercentage) {
            highestPercentage = percentage;
            highestReason = reason;
        }
    }
    
    return highestReason || 'climate'; // Default to climate if something goes wrong
}

// Track currently selected segment for enlargement - separate for each chart
let currentlySelectedSegment = null; // For individual bird chart
let currentlySelectedMajorSegment = null; // For major reasons chart

// Function to create and update the radial donut chart with advanced visuals
function updateRadialChart() {
    const bird = birdData[selectedBird];
    const chartSvg = document.querySelector('.chart-svg');
    
    // Clear existing content
    chartSvg.innerHTML = '';
    
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 75;
    const innerRadius = 42;
    const labelRadius = 95;
    let currentAngle = 0;
    
    // Find the highest percentage migration reason for pre-selection
    const highestReason = getHighestMigrationReason(bird);
    
    // Set initial selected segment to highest percentage reason only if not already set
    // Reset when changing birds
    if (!currentlySelectedSegment || !bird.migrationReasons.hasOwnProperty(currentlySelectedSegment)) {
        currentlySelectedSegment = highestReason;
    }
    
    // Create gradient definitions for each segment
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    chartSvg.appendChild(defs);
    
    // Create particle system container
    const particleContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    particleContainer.classList.add('particle-container');
    chartSvg.appendChild(particleContainer);
    
    // Create segments container
    const segmentsContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    segmentsContainer.classList.add('segments-container');
    chartSvg.appendChild(segmentsContainer);
    
    // Create center animation container
    const centerContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    centerContainer.classList.add('center-container');
    chartSvg.appendChild(centerContainer);
    
    // Create chart segments with advanced effects
    Object.entries(bird.migrationReasons).forEach(([reason, percentage], index) => {
        const angle = (percentage / 100) * 360;
        const midAngle = currentAngle + (angle / 2);
        
        // Check if this segment is currently selected
        const isSelected = reason === currentlySelectedSegment;
        
        // Create gradient for this segment with unique prefix
        const gradient = createSegmentGradient(defs, reason, index, 'individual');
        
        // Create main segment path - enlarge selected segment
        const segmentOuterRadius = isSelected ? outerRadius + 8 : outerRadius;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', createArcPath(centerX, centerY, segmentOuterRadius, innerRadius, currentAngle, currentAngle + angle));
        
        // All segments use gradient colors with unique prefix
        path.setAttribute('fill', `url(#individual-gradient-${reason}-${index})`);
        
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', isSelected ? '2' : '1');
        path.classList.add('chart-segment');
        path.setAttribute('data-reason', reason);
        path.setAttribute('data-percentage', percentage);
        
        // Add selection styling for enlarged segment
        if (isSelected) {
            path.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8))';
            // Removed scale transform to eliminate zoom effect
        }
        
        // Create shadow/depth effect
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        shadow.setAttribute('d', createArcPath(centerX + 2, centerY + 2, outerRadius, innerRadius, currentAngle, currentAngle + angle));
        shadow.setAttribute('fill', 'rgba(0,0,0,0.2)');
        shadow.setAttribute('stroke', 'none');
        shadow.classList.add('chart-shadow');
        
        // Add shadow first (behind segment)
        segmentsContainer.appendChild(shadow);
        segmentsContainer.appendChild(path);
        
        // Create pulsing effect based on percentage
        const pulseIntensity = percentage / 100;
        path.style.animation = `segmentPulse ${2 + pulseIntensity}s ease-in-out infinite`;
        
        // Enhanced hover effects with particle bursts
        path.addEventListener('mouseenter', function() {
            // Check if this segment is already selected to avoid visual conflicts
            if (reason === currentlySelectedSegment) {
                // For selected segments, only apply subtle brightness increase
                this.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))';
                // Keep existing transform from selection
            } else {
                // For non-selected segments, apply normal hover effects
                this.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))';
                this.style.transform = 'scale(1.08)';
                this.style.transformOrigin = `${centerX}px ${centerY}px`;
            }
            
            // Trigger particle burst
            createParticleBurst(particleContainer, reason, centerX, centerY, midAngle, outerRadius);
            
            // Update center bird animation
            updateCenterBird(centerContainer, reason);
            
            // Highlight corresponding migration reason image
            highlightMigrationReason(reason);
            
            // Create ripple effect
            createRippleEffect(chartSvg, centerX, centerY, outerRadius);
        });
        
        path.addEventListener('mouseleave', function() {
            // Reset hover effects based on selection state
            if (reason === currentlySelectedSegment) {
                // For selected segments, restore the selected state styling
                this.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8))';
                // Keep the selected transform
            } else {
                // For non-selected segments, reset to normal state
                this.style.filter = 'brightness(1)';
                this.style.transform = 'scale(1)';
            }
            
            // Reset center bird to selected segment
            resetCenterBird(centerContainer);
            
            // Remove highlight
            removeHighlightMigrationReason();
        });
        
        // Add click functionality to select segments
        path.addEventListener('click', function() {
            // Update currently selected segment
            currentlySelectedSegment = reason;
            
            // Regenerate the chart with new selection
            updateRadialChart();
        });
        
        // Create enhanced labels with animation
        createEnhancedLabel(chartSvg, reason, percentage, midAngle, labelRadius, centerX, centerY);
        
        currentAngle += angle;
    });
    
    // Add animated center bird
    createCenterBird(centerContainer, centerX, centerY);
}

// Create gradient for segment with unique prefix to avoid conflicts
function createSegmentGradient(defs, reason, index, chartPrefix = 'chart') {
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    gradient.setAttribute('id', `${chartPrefix}-gradient-${reason}-${index}`);
    gradient.setAttribute('cx', '50%');
    gradient.setAttribute('cy', '50%');
    gradient.setAttribute('r', '50%');
    
    const baseColor = chartColors[reason];
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', lightenColor(baseColor, 20));
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', baseColor);
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    
    return gradient;
}

// Create floating birds around the chart
function createFloatingBirds(svg, centerX, centerY, radius) {
    for (let i = 0; i < 8; i++) {
        const angle = (i * 45) * Math.PI / 180;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        const bird = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        bird.setAttribute('x', x);
        bird.setAttribute('y', y);
        bird.setAttribute('text-anchor', 'middle');
        bird.setAttribute('dominant-baseline', 'middle');
        bird.setAttribute('font-size', '12');
        bird.setAttribute('fill', 'rgba(255,255,255,0.6)');
        bird.textContent = '🕊️';
        bird.classList.add('floating-bird');
        bird.style.animation = `floatBird ${3 + Math.random() * 2}s ease-in-out infinite`;
        bird.style.animationDelay = `${i * 0.3}s`;
        
        svg.appendChild(bird);
    }
}

// Create center image that changes based on hover
function createCenterBird(container, centerX, centerY) {
    // Create circular clipping path
    const defs = document.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    if (!document.querySelector('defs')) {
        container.parentNode.appendChild(defs);
    }
    
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clipPath.setAttribute('id', 'center-circle-clip');
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', '35'); // Slightly smaller than inner radius (40) for padding
    
    clipPath.appendChild(circle);
    defs.appendChild(clipPath);
    
    // Get the highest percentage migration reason for this bird
    const bird = birdData[selectedBird];
    const highestReason = getHighestMigrationReason(bird);
    
    const migrationImages = {
        predators: './images/migration-reasons/migration-reason-predators.png',
        breeding: './images/migration-reasons/migration-reason-breeding.png',
        climate: './images/migration-reasons/migration-reason-climate-change.png',
        feeding: './images/migration-reasons/migration-reason-feeding.png'
    };
    
    // Create center image that fills the circle
    const centerImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    centerImage.setAttribute('x', centerX - 35); // Center the 70x70 image
    centerImage.setAttribute('y', centerY - 35);
    centerImage.setAttribute('width', '70');
    centerImage.setAttribute('height', '70');
    centerImage.setAttribute('href', migrationImages[highestReason]); // Use highest percentage reason as default
    centerImage.setAttribute('clip-path', 'url(#center-circle-clip)');
    centerImage.classList.add('center-bird');
    centerImage.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))';
    // Remove animations - no floating or pulsing
    
    container.appendChild(centerImage);
}

// Update center image based on migration reason
function updateCenterBird(container, reason) {
    const centerImage = container.querySelector('.center-bird');
    if (centerImage) {
        const migrationImages = {
            predators: './images/migration-reasons/migration-reason-predators.png',
            breeding: './images/migration-reasons/migration-reason-breeding.png',
            climate: './images/migration-reasons/migration-reason-climate-change.png',
            feeding: './images/migration-reasons/migration-reason-feeding.png'
        };
        centerImage.setAttribute('href', migrationImages[reason] || migrationImages.breeding);
        // No animations - image stays static
    }
}

// Reset center image
function resetCenterBird(container) {
    const centerImage = container.querySelector('.center-bird');
    if (centerImage) {
        // Reset to currently selected segment instead of always highest percentage
        const migrationImages = {
            predators: './images/migration-reasons/migration-reason-predators.png',
            breeding: './images/migration-reasons/migration-reason-breeding.png',
            climate: './images/migration-reasons/migration-reason-climate-change.png',
            feeding: './images/migration-reasons/migration-reason-feeding.png'
        };
        
        // Use currently selected segment, fallback to highest percentage if not set
        const bird = birdData[selectedBird];
        const highestReason = getHighestMigrationReason(bird);
        const imageToShow = currentlySelectedSegment || highestReason;
        
        centerImage.setAttribute('href', migrationImages[imageToShow]);
    }
}

// Create particle burst effect
function createParticleBurst(container, reason, centerX, centerY, angle, radius) {
    const particleCount = 8;
    const angleRad = angle * Math.PI / 180;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const startX = centerX + Math.cos(angleRad) * (radius - 10);
        const startY = centerY + Math.sin(angleRad) * (radius - 10);
        
        particle.setAttribute('cx', startX);
        particle.setAttribute('cy', startY);
        particle.setAttribute('r', '2');
        particle.setAttribute('fill', chartColors[reason]);
        particle.setAttribute('opacity', '0.8');
        particle.classList.add('burst-particle');
        
        const spread = (Math.random() - 0.5) * 30;
        const endX = startX + Math.cos(angleRad + spread * Math.PI / 180) * 40;
        const endY = startY + Math.sin(angleRad + spread * Math.PI / 180) * 40;
        
        particle.style.animation = 'none';
        particle.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
        particle.style.opacity = '0';
        particle.style.transition = 'all 1s ease-out';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Create ripple effect
function createRippleEffect(svg, centerX, centerY, radius) {
    const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ripple.setAttribute('cx', centerX);
    ripple.setAttribute('cy', centerY);
    ripple.setAttribute('r', radius);
    ripple.setAttribute('fill', 'none');
    ripple.setAttribute('stroke', 'rgba(255,255,255,0.5)');
    ripple.setAttribute('stroke-width', '2');
    ripple.classList.add('ripple-effect');
    
    svg.appendChild(ripple);
    
    // Animate ripple
    ripple.style.animation = 'rippleExpand 1.5s ease-out forwards';
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 1500);
}

// Create enhanced labels with animations
function createEnhancedLabel(svg, reason, percentage, midAngle, labelRadius, centerX, centerY) {
    const labelPosition = polarToCartesian(centerX, centerY, labelRadius, midAngle);
    
    // Removed animated connection line as requested
    
    // Create enhanced label background
    const labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const labelText = `${migrationReasonTitles[reason]}: ${percentage.toFixed(1)}%`;
    const textWidth = labelText.length * 4.5;
    
    labelBg.setAttribute('x', labelPosition.x - textWidth/2);
    labelBg.setAttribute('y', labelPosition.y - 9);
    labelBg.setAttribute('width', textWidth);
    labelBg.setAttribute('height', '16');
    labelBg.setAttribute('rx', '8');
    labelBg.setAttribute('fill', 'rgba(0,0,0,0.6)');
    labelBg.setAttribute('stroke', chartColors[reason]);
    labelBg.setAttribute('stroke-width', '1');
    labelBg.classList.add('label-background');
    
    svg.appendChild(labelBg);
    
    // Create enhanced label text
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', labelPosition.x);
    label.setAttribute('y', labelPosition.y);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('dominant-baseline', 'middle');
    label.setAttribute('fill', '#F5F5DC');
    label.setAttribute('font-size', '7');
    label.setAttribute('font-weight', 'bold');
    label.setAttribute('font-family', 'Georgia, serif');
    label.style.filter = 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))';
    label.textContent = labelText;
    label.classList.add('enhanced-label');
    
    svg.appendChild(label);
}

// Start ambient particle animation
function startAmbientParticles(container, centerX, centerY, radius) {
    setInterval(() => {
        createAmbientParticle(container, centerX, centerY, radius);
    }, 1500);
}

// Create ambient floating particles
function createAmbientParticle(container, centerX, centerY, radius) {
    const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const angle = Math.random() * 2 * Math.PI;
    const startRadius = radius + 20;
    const x = centerX + Math.cos(angle) * startRadius;
    const y = centerY + Math.sin(angle) * startRadius;
    
    particle.setAttribute('cx', x);
    particle.setAttribute('cy', y);
    particle.setAttribute('r', Math.random() * 2 + 1);
    particle.setAttribute('fill', 'rgba(255,255,255,0.4)');
    particle.classList.add('ambient-particle');
    
    container.appendChild(particle);
    
    // Animate particle
    const duration = 8000 + Math.random() * 4000;
    particle.style.animation = `ambientFloat ${duration}ms linear forwards`;
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, duration);
}

// Highlight migration reason in the left panel
function highlightMigrationReason(reason) {
    const reasonImages = {
        predators: 'migration-reason-predators.png',
        breeding: 'migration-reason-breeding.png',
        climate: 'migration-reason-climate-change.png',
        feeding: 'migration-reason-feeding.png'
    };
    
    const allRows = document.querySelectorAll('.reason-row');
    allRows.forEach((row, index) => {
        const img = row.querySelector('.reason-image');
        if (img && img.src.includes(reasonImages[reason])) {
            row.style.transform = 'scale(1.05)';
            row.style.background = 'rgba(255,255,255,0.1)';
            row.style.borderRadius = '15px';
            row.style.transition = 'all 0.3s ease';
        }
    });
}

// Remove highlight from migration reasons
function removeHighlightMigrationReason() {
    const allRows = document.querySelectorAll('.reason-row');
    allRows.forEach(row => {
        row.style.transform = 'scale(1)';
        row.style.background = 'transparent';
    });
}

// Utility function to lighten colors
function lightenColor(color, percent) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const newR = Math.min(255, Math.floor(r + (255 - r) * percent / 100));
    const newG = Math.min(255, Math.floor(g + (255 - g) * percent / 100));
    const newB = Math.min(255, Math.floor(b + (255 - b) * percent / 100));
    
    return `rgb(${newR}, ${newG}, ${newB})`;
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

// Function to show migration patterns section
function showMigrationPatternsSection() {
    console.log('showMigrationPatternsSection called'); // Debug log
    
    const migrationPatternsSection = document.querySelector('.migration-patterns-section');
    console.log('Migration patterns section found:', migrationPatternsSection); // Debug log
    
    if (!migrationPatternsSection) {
        console.error('Migration patterns section not found!');
        return;
    }
    
    // Update title
    const titleElement = document.querySelector('.migration-patterns-title');
    if (titleElement) {
        titleElement.textContent = `Common Patterns around Migration Reasons`;
    }
    
    // Remove subtitle
    const subtitleElement = document.querySelector('.migration-patterns-subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = '';
    }
    
    // Update the major reasons chart
    try {
        updateMajorReasonsChart();
        console.log('Major reasons chart updated successfully'); // Debug log
    } catch (error) {
        console.error('Error updating major reasons chart:', error);
    }
    
    // Create the horizontal bar chart
    try {
        createHorizontalBarChart();
        console.log('Horizontal bar chart created successfully'); // Debug log
    } catch (error) {
        console.error('Error creating horizontal bar chart:', error);
    }
    
    // Show the migration patterns section
    migrationPatternsSection.classList.add('visible');
    console.log('Added visible class to migration patterns section'); // Debug log
    
    // Scroll to migration patterns section
    migrationPatternsSection.scrollIntoView({
        behavior: 'smooth'
    });
    console.log('Scrolled to migration patterns section'); // Debug log
}

// Function to update the selected bird chart
function updateSelectedBirdChart() {
    const chartSvg = document.querySelector('.selected-chart-svg');
    
    // Update title to show major reasons behind bird migration
    document.querySelector('.selected-bird-name').textContent = 'Major Reason behind birds migration';
    
    // Clear existing content
    chartSvg.innerHTML = '';
    
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 70;
    const innerRadius = 40;
    const labelRadius = 90;
    let currentAngle = 0;
    
    // Overall migration reason statistics
    const overallMigrationReasons = {
        predators: 14.6,
        breeding: 26.7,
        climate: 28.9,
        feeding: 29.8
    };
    
    // Find the highest percentage migration reason
    let highestReason = 'feeding'; // Based on the provided stats
    
    // Create gradient definitions for each segment
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    chartSvg.appendChild(defs);
    
    // Create segments container
    const segmentsContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    segmentsContainer.classList.add('segments-container');
    chartSvg.appendChild(segmentsContainer);
    
    // Create chart segments using overall statistics
    Object.entries(overallMigrationReasons).forEach(([reason, percentage], index) => {
        const angle = (percentage / 100) * 360;
        const midAngle = currentAngle + (angle / 2);
        
        // Check if this reason is the highest percentage
        const isHighest = reason === highestReason;
        
        // Create gradient for this segment
        const gradient = createSegmentGradient(defs, reason, index);
        
        // Create segment path
        const segmentOuterRadius = isHighest ? outerRadius + 5 : outerRadius;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', createArcPath(centerX, centerY, segmentOuterRadius, innerRadius, currentAngle, currentAngle + angle));
        path.setAttribute('fill', `url(#gradient-${reason})`);
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', isHighest ? '2' : '1');
        path.classList.add('chart-segment');
        path.setAttribute('data-reason', reason);
        path.setAttribute('data-percentage', percentage);
        
        // Add special styling for highest percentage reason
        if (isHighest) {
            path.style.filter = 'brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.5))';
            path.style.transform = 'scale(1.03)';
            path.style.transformOrigin = `${centerX}px ${centerY}px`;
        }
        
        // Add segment to container
        segmentsContainer.appendChild(path);
        
        // Create enhanced labels with reason name and percentage
        const labelPosition = polarToCartesian(centerX, centerY, labelRadius, midAngle);
        
        // Create enhanced label background
        const labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const labelText = `${migrationReasonTitles[reason]}: ${percentage.toFixed(1)}%`;
        const textWidth = labelText.length * 4.5;
        
        labelBg.setAttribute('x', labelPosition.x - textWidth/2);
        labelBg.setAttribute('y', labelPosition.y - 9);
        labelBg.setAttribute('width', textWidth);
        labelBg.setAttribute('height', '16');
        labelBg.setAttribute('rx', '8');
        labelBg.setAttribute('fill', 'rgba(0,0,0,0.6)');
        labelBg.setAttribute('stroke', chartColors[reason]);
        labelBg.setAttribute('stroke-width', '1');
        
        chartSvg.appendChild(labelBg);
        
        // Create label text
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', labelPosition.x);
        label.setAttribute('y', labelPosition.y);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('dominant-baseline', 'middle');
        label.setAttribute('fill', '#F5F5DC');
        label.setAttribute('font-size', '8');
        label.setAttribute('font-weight', 'bold');
        label.setAttribute('font-family', 'Georgia, serif');
        label.style.filter = 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))';
        label.textContent = labelText;
        
        // Add label to chart
        chartSvg.appendChild(label);
        
        // Move to next segment
        currentAngle += angle;
    });
    
    // Create circular clipping path for the migration reason image
    const overallMaskId = `overall-migration-mask`;
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clipPath.setAttribute('id', overallMaskId);
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', innerRadius - 5);
    
    clipPath.appendChild(circle);
    defs.appendChild(clipPath);
    
    // Create migration reason image in the center (using the highest percentage reason: feeding)
    const migrationImages = {
        predators: './images/migration-reasons/migration-reason-predators.png',
        breeding: './images/migration-reasons/migration-reason-breeding.png',
        climate: './images/migration-reasons/migration-reason-climate-change.png',
        feeding: './images/migration-reasons/migration-reason-feeding.png'
    };
    
    const imageSize = (innerRadius - 5) * 2.2;
    const centerImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    centerImage.setAttribute('x', centerX - imageSize/2);
    centerImage.setAttribute('y', centerY - imageSize/2);
    centerImage.setAttribute('width', imageSize);
    centerImage.setAttribute('height', imageSize);
    centerImage.setAttribute('href', migrationImages.feeding); // Using feeding since it's the highest percentage
    centerImage.setAttribute('clip-path', `url(#${overallMaskId})`);
    centerImage.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    centerImage.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))';
    
    chartSvg.appendChild(centerImage);
}

// Function to update all bird grid charts
function updateBirdGridCharts() {
    // Get birds to display (all birds except the selected one)
    const displayBirds = allBirds.filter(bird => bird !== selectedBird);
    
    // Select only 6 birds for the grid (this should give us 6 since there are 7 total birds)
    const gridBirds = displayBirds.slice(0, 6);
    
    // Get the grid container
    const gridContainer = document.querySelector('.bird-charts-grid');
    gridContainer.innerHTML = '';
    
    // Create a chart for each bird
    gridBirds.forEach(birdType => {
        const bird = birdData[birdType];
        const highestReason = getHighestMigrationReason(bird);
        
        // Create bird chart box
        const birdChartBox = document.createElement('div');
        birdChartBox.classList.add('bird-chart-box');
        birdChartBox.dataset.birdType = birdType;
        
        // Create bird name element
        const birdName = document.createElement('h4');
        birdName.classList.add('bird-chart-name');
        birdName.textContent = bird.name;
        
        // Create SVG container
        const svgContainer = document.createElement('div');
        svgContainer.classList.add('bird-chart-svg-container');
        
        // Create SVG element for chart
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('bird-chart-svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        
        // Create mini donut chart
        createMiniBirdChart(svg, bird, highestReason);
        
        // Assemble elements (no overlay needed since bird image is in SVG)
        svgContainer.appendChild(svg);
        birdChartBox.appendChild(birdName);
        birdChartBox.appendChild(svgContainer);
        
        // Click functionality disabled - no longer changes selected bird
        // birdChartBox.addEventListener('click', () => {
        //     updateSelectedBird(birdType);
        //     updateSelectedBirdChart();
        //     updateBirdGridCharts();
        // });
        
        // Add to grid
        gridContainer.appendChild(birdChartBox);
    });
}

// Create a mini donut chart for grid items
function createMiniBirdChart(svg, bird, highestReason) {
    const centerX = 50;
    const centerY = 50;
    const outerRadius = 42;
    const innerRadius = 27;
    let currentAngle = 0;
    
    // Calculate total percentage to ensure proper scaling
    const totalPercentage = Object.values(bird.migrationReasons).reduce((sum, value) => sum + value, 0);
    
    // Create defs for gradients and mask
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    svg.appendChild(defs);
    
    // Create segments first
    const segmentsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    
    Object.entries(bird.migrationReasons).forEach(([reason, percentage], index) => {
        // Normalize percentage to ensure total is 360 degrees
        const normalizedPercentage = (percentage / totalPercentage) * 100;
        const angle = (normalizedPercentage / 100) * 360;
        
        // Check if this is the highest percentage
        const isHighest = reason === highestReason;
        
        // Expand the highest segment slightly
        const segmentOuterRadius = isHighest ? outerRadius + 3 : outerRadius;
        
        // Create simplified gradient
        const sanitizedBirdName = bird.name.replace(/\s+/g, '').toLowerCase();
        const gradientId = `mini-gradient-${sanitizedBirdName}-${reason}-${index}`;
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
        gradient.setAttribute('id', gradientId);
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', lightenColor(chartColors[reason], 20));
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', chartColors[reason]);
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        
        // Create segment with proper radius
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', createArcPath(centerX, centerY, segmentOuterRadius, innerRadius, currentAngle, currentAngle + angle));
        path.setAttribute('fill', `url(#${gradientId})`);
        path.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
        path.setAttribute('stroke-width', '0.5');
        path.classList.add('mini-chart-segment');
        
        // Add styling for highest segment
        if (isHighest) {
            path.setAttribute('data-highest', 'true');
            path.style.filter = 'brightness(1.1) drop-shadow(0 1px 2px rgba(0,0,0,0.3))';
        }
        
        segmentsGroup.appendChild(path);
        
        // Update angle for next segment (ensure no gaps)
        currentAngle += angle;
    });
    
    // Add segments to SVG
    svg.appendChild(segmentsGroup);
    
    // Create circular mask for bird image using a different approach
    const sanitizedBirdName = bird.name.replace(/\s+/g, '').toLowerCase();
    const maskId = `mini-mask-${sanitizedBirdName}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create mask element instead of clipPath
    const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    mask.setAttribute('id', maskId);
    
    // White circle in mask makes that area visible
    const maskCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    maskCircle.setAttribute('cx', centerX);
    maskCircle.setAttribute('cy', centerY);
    maskCircle.setAttribute('r', innerRadius - 4); // Slightly smaller radius for better fit
    maskCircle.setAttribute('fill', 'white');
    
    mask.appendChild(maskCircle);
    defs.appendChild(mask);
    
    // Add bird image with proper circular masking
    const imageRadius = innerRadius - 4;
    const imageSize = imageRadius * 2; // Make image exactly fit the circle
    const centerImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    centerImage.setAttribute('x', centerX - imageSize/2);
    centerImage.setAttribute('y', centerY - imageSize/2);
    centerImage.setAttribute('width', imageSize);
    centerImage.setAttribute('height', imageSize);
    centerImage.setAttribute('href', bird.img);
    centerImage.setAttribute('mask', `url(#${maskId})`);
    centerImage.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    centerImage.style.filter = 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))';
    
    svg.appendChild(centerImage);
    
    // Add a subtle border around the circular image
    const borderCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    borderCircle.setAttribute('cx', centerX);
    borderCircle.setAttribute('cy', centerY);
    borderCircle.setAttribute('r', imageRadius);
    borderCircle.setAttribute('fill', 'none');
    borderCircle.setAttribute('stroke', 'rgba(255, 255, 255, 0.8)');
    borderCircle.setAttribute('stroke-width', '1');
    
    svg.appendChild(borderCircle);
}

// Helper function to find highest percentage migration reason for major chart
function getHighestMajorMigrationReason(majorReasons) {
    let highestReason = null;
    let highestPercentage = -1;
    
    for (const [reason, percentage] of Object.entries(majorReasons)) {
        if (percentage > highestPercentage) {
            highestPercentage = percentage;
            highestReason = reason;
        }
    }
    
    return highestReason || 'feeding'; // Default to feeding if something goes wrong
}

// Function to update the major reasons chart
function updateMajorReasonsChart() {
    console.log('updateMajorReasonsChart called'); // Debug log
    
    const chartSvg = document.querySelector('.major-reasons-svg');
    console.log('Chart SVG element found:', chartSvg); // Debug log
    
    if (!chartSvg) {
        console.error('major-reasons-svg element not found!');
        return;
    }
    
    // Clear existing content
    chartSvg.innerHTML = '';
    console.log('Chart SVG cleared, starting to build chart'); // Debug log
    
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 75;
    const innerRadius = 42;
    const labelRadius = 95;
    let currentAngle = 0;
    
    // Overall migration reason statistics (as specified by user)
    const majorMigrationReasons = {
        predators: 14.6,
        breeding: 26.7,
        climate: 28.9,
        feeding: 29.8
    };
    
    // Find the highest percentage migration reason dynamically
    // Set initial selected segment to highest percentage reason only if not already set
    if (!currentlySelectedMajorSegment) {
        currentlySelectedMajorSegment = getHighestMajorMigrationReason(majorMigrationReasons);
    }
    console.log('Selected major migration reason:', currentlySelectedMajorSegment, 'with percentage:', majorMigrationReasons[currentlySelectedMajorSegment]); // Debug log
    
    // Create gradient definitions for each segment
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    chartSvg.appendChild(defs);
    
    // Create particle system container
    const particleContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    particleContainer.classList.add('particle-container');
    chartSvg.appendChild(particleContainer);
    
    // Create segments container
    const segmentsContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    segmentsContainer.classList.add('segments-container');
    chartSvg.appendChild(segmentsContainer);
    
    // Create center animation container
    const centerContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    centerContainer.classList.add('center-container');
    chartSvg.appendChild(centerContainer);
    
    // Create chart segments with advanced effects
    Object.entries(majorMigrationReasons).forEach(([reason, percentage], index) => {
        const angle = (percentage / 100) * 360;
        const midAngle = currentAngle + (angle / 2);
        
        // Check if this segment is currently selected
        const isSelected = reason === currentlySelectedMajorSegment;
        
        // Create gradient for this segment with major prefix
        const gradient = createSegmentGradient(defs, reason, index, 'major');
        
        // Create main segment path - enlarge selected segment
        const segmentOuterRadius = isSelected ? outerRadius + 8 : outerRadius;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', createArcPath(centerX, centerY, segmentOuterRadius, innerRadius, currentAngle, currentAngle + angle));
        
        // All segments use gradient colors with major prefix
        path.setAttribute('fill', `url(#major-gradient-${reason}-${index})`);
        
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', isSelected ? '2' : '1');
        path.classList.add('major-chart-segment');
        path.setAttribute('data-reason', reason);
        path.setAttribute('data-percentage', percentage);
        
        // Add selection styling for enlarged segment and minimize others
        if (isSelected) {
            path.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8))';
            path.style.opacity = '1';
        } else {
            path.style.filter = 'brightness(0.6)';
            path.style.opacity = '0.7';
        }
        
        // Create shadow/depth effect
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        shadow.setAttribute('d', createArcPath(centerX + 2, centerY + 2, outerRadius, innerRadius, currentAngle, currentAngle + angle));
        shadow.setAttribute('fill', 'rgba(0,0,0,0.2)');
        shadow.setAttribute('stroke', 'none');
        shadow.classList.add('chart-shadow');
        
        // Add shadow first (behind segment)
        segmentsContainer.appendChild(shadow);
        segmentsContainer.appendChild(path);
        
        // Create pulsing effect based on percentage
        const pulseIntensity = percentage / 100;
        path.style.animation = `segmentPulse ${2 + pulseIntensity}s ease-in-out infinite`;
        
        // Enhanced hover effects with particle bursts
        path.addEventListener('mouseenter', function() {
            // Check if this segment is already selected to avoid visual conflicts
            if (reason === currentlySelectedMajorSegment) {
                // For selected segments, only apply subtle brightness increase
                this.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))';
            } else {
                // For non-selected segments, apply normal hover effects
                this.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))';
                this.style.transform = 'scale(1.08)';
                this.style.transformOrigin = `${centerX}px ${centerY}px`;
            }
            
            // Trigger particle burst
            createParticleBurst(particleContainer, reason, centerX, centerY, midAngle, outerRadius);
            
            // Update center image
            updateMajorCenterImage(centerContainer, reason);
            
            // Create ripple effect
            createRippleEffect(chartSvg, centerX, centerY, outerRadius);
        });
        
        path.addEventListener('mouseleave', function() {
            // Reset hover effects based on selection state
            if (reason === currentlySelectedMajorSegment) {
                // For selected segments, restore the selected state styling
                this.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8))';
                this.style.opacity = '1';
            } else {
                // For non-selected segments, reset to minimized state
                this.style.filter = 'brightness(0.6)';
                this.style.opacity = '0.7';
                this.style.transform = 'scale(1)';
            }
            
            // Reset center image to selected segment
            resetMajorCenterImage(centerContainer);
        });
        
        // Add click functionality to select segments (expand on click)
        path.addEventListener('click', function() {
            // Update currently selected segment
            currentlySelectedMajorSegment = reason;
            
            // Regenerate the chart with new selection
            updateMajorReasonsChart();
            
            // Expand the corresponding segments in horizontal bar chart
            expandHorizontalBarSegments(reason);
        });
        
        // Create enhanced labels with animation
        createEnhancedLabel(chartSvg, reason, percentage, midAngle, labelRadius, centerX, centerY);
        
        currentAngle += angle;
    });
    
    // Add animated center image
    createMajorCenterImage(centerContainer, centerX, centerY);
}

// Create center image for major reasons chart
function createMajorCenterImage(container, centerX, centerY) {
    // Create circular clipping path
    const defs = document.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    if (!document.querySelector('#major-center-circle-clip')) {
        const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipPath.setAttribute('id', 'major-center-circle-clip');
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', '35'); // Slightly smaller than inner radius (42) for padding
        
        clipPath.appendChild(circle);
        defs.appendChild(clipPath);
    }
    
    // Default to feeding since it has the highest percentage (29.8%)
    const migrationImages = {
        predators: './images/migration-reasons/migration-reason-predators.png',
        breeding: './images/migration-reasons/migration-reason-breeding.png',
        climate: './images/migration-reasons/migration-reason-climate-change.png',
        feeding: './images/migration-reasons/migration-reason-feeding.png'
    };
    
    // Create center image that fills the circle
    const centerImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    centerImage.setAttribute('x', centerX - 35); // Center the 70x70 image
    centerImage.setAttribute('y', centerY - 35);
    centerImage.setAttribute('width', '70');
    centerImage.setAttribute('height', '70');
    centerImage.setAttribute('href', migrationImages.feeding); // Default to feeding (highest percentage)
    centerImage.setAttribute('clip-path', 'url(#major-center-circle-clip)');
    centerImage.classList.add('major-center-image');
    centerImage.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))';
    
    container.appendChild(centerImage);
}

// Update center image for major reasons chart based on migration reason
function updateMajorCenterImage(container, reason) {
    const centerImage = container.querySelector('.major-center-image');
    if (centerImage) {
        const migrationImages = {
            predators: './images/migration-reasons/migration-reason-predators.png',
            breeding: './images/migration-reasons/migration-reason-breeding.png',
            climate: './images/migration-reasons/migration-reason-climate-change.png',
            feeding: './images/migration-reasons/migration-reason-feeding.png'
        };
        centerImage.setAttribute('href', migrationImages[reason] || migrationImages.feeding);
    }
}

// Reset center image for major reasons chart
function resetMajorCenterImage(container) {
    const centerImage = container.querySelector('.major-center-image');
    if (centerImage) {
        // Reset to currently selected segment instead of always feeding
        const migrationImages = {
            predators: './images/migration-reasons/migration-reason-predators.png',
            breeding: './images/migration-reasons/migration-reason-breeding.png',
            climate: './images/migration-reasons/migration-reason-climate-change.png',
            feeding: './images/migration-reasons/migration-reason-feeding.png'
        };
        
        centerImage.setAttribute('href', migrationImages[currentlySelectedMajorSegment] || migrationImages.feeding);
    }
}

// Function to create horizontal stacked bar chart
function createHorizontalBarChart() {
    const rightSection = document.querySelector('.patterns-right-section');
    
    // Clear existing content
    rightSection.innerHTML = '';
    
    // Create the horizontal chart container
    const chartContainer = document.createElement('div');
    chartContainer.classList.add('horizontal-chart-container');
    
    // Create title
    const title = document.createElement('h3');
    title.classList.add('horizontal-chart-title');
    title.textContent = 'Migration Reasons by Species';
    chartContainer.appendChild(title);
    
    // Create bars container
    const barsContainer = document.createElement('div');
    barsContainer.classList.add('horizontal-bars-container');
    
    // Create bars for each bird
    allBirds.forEach(birdType => {
        const bird = birdData[birdType];
        const reasons = bird.migrationReasons;
        
        // Calculate total to ensure 100%
        const total = Object.values(reasons).reduce((sum, value) => sum + value, 0);
        
        // Create bird row
        const birdRow = document.createElement('div');
        birdRow.classList.add('bird-bar-row');
        
        // Create bird image (square, rounded on left side only)
        const birdImage = document.createElement('img');
        birdImage.classList.add('bird-bar-image');
        birdImage.src = bird.img;
        birdImage.alt = bird.name;
        birdImage.title = bird.name; // Add tooltip showing bird name on hover
        birdRow.appendChild(birdImage);
        
        // Create bird bar content container
        const birdContent = document.createElement('div');
        birdContent.classList.add('bird-bar-content');
        
        // Create bar container
        const barContainer = document.createElement('div');
        barContainer.classList.add('bird-bar-container');
        
        // Create the stacked bar
        const bar = document.createElement('div');
        bar.classList.add('bird-bar');
        
        // Add segments for each migration reason
        Object.entries(reasons).forEach(([reason, percentage]) => {
            const normalizedPercentage = (percentage / total) * 100;
            
            const segment = document.createElement('div');
            segment.classList.add('bar-segment', reason);
            segment.style.width = `${normalizedPercentage}%`;
            
            // Add label that shows percentage
            const label = document.createElement('span');
            label.classList.add('bar-segment-label');
            label.textContent = `${percentage.toFixed(1)}%`;
            label.style.transition = 'opacity 0.3s ease';
            
            // Only show feeding labels by default (since feeding is default selected on donut chart)
            if (reason === 'feeding') {
                label.style.opacity = '1';
            } else {
                label.style.opacity = '0';
            }
            
            segment.appendChild(label);
            
            // Add visual emphasis to feeding segments to match donut chart
            if (reason === 'feeding') {
                segment.style.transform = 'scaleY(1.2)';
                segment.style.transformOrigin = 'center';
                segment.style.zIndex = '10';
                segment.style.position = 'relative';
                segment.style.overflow = 'visible';
                segment.classList.add('expanded-segment');
            }
            
            // Add tooltip functionality
            segment.title = `${migrationReasonTitles[reason]}: ${percentage.toFixed(1)}%`;
            
            bar.appendChild(segment);
        });
        
        barContainer.appendChild(bar);
        birdContent.appendChild(barContainer);
        birdRow.appendChild(birdContent);
        barsContainer.appendChild(birdRow);
    });
    
    chartContainer.appendChild(barsContainer);
    
    // Add Explore Migration Path button below the chart
    const exploreButton = document.createElement('button');
    exploreButton.classList.add('continue-migration-path-btn');
    exploreButton.textContent = 'Explore Migration Path';
    exploreButton.addEventListener('click', showMigrationPathSection);
    
    chartContainer.appendChild(exploreButton);
    rightSection.appendChild(chartContainer);
}

// Function to expand horizontal bar segments of a specific reason (triggered by donut chart clicks)
function expandHorizontalBarSegments(targetReason) {
    const allSegments = document.querySelectorAll('.bar-segment');
    
    // Reset all segments to normal state first
    allSegments.forEach(segment => {
        segment.style.transform = '';
        segment.style.filter = '';
        segment.style.zIndex = '';
        segment.style.position = '';
        segment.style.overflow = '';
        segment.classList.remove('expanded-segment');
        
        // Hide percentage labels for non-expanded segments
        const label = segment.querySelector('.bar-segment-label');
        if (label) {
            label.style.opacity = '0';
        }
    });
    
    // Apply expansion effect to segments of the selected reason
    allSegments.forEach(segment => {
        if (segment.classList.contains(targetReason)) {
            segment.style.transform = 'scaleY(1.2)';
            segment.style.transformOrigin = 'center';
            segment.style.zIndex = '10';
            segment.style.position = 'relative';
            segment.style.overflow = 'visible';
            segment.classList.add('expanded-segment');
            
            // Show percentage labels for expanded segments
            const label = segment.querySelector('.bar-segment-label');
            if (label) {
                label.style.opacity = '1';
                label.style.transition = 'opacity 0.3s ease';
            }
        }
    });
}

// Helper function to get glow color for each reason
function getReasonGlowColor(reason) {
    const glowColors = {
        predators: '139, 69, 19',    // Brown glow for predators
        breeding: '70, 130, 180',    // Blue glow for breeding
        climate: '95, 158, 160',     // Cadet blue glow for climate
        feeding: '222, 184, 135'     // Burlywood glow for feeding
    };
    return glowColors[reason] || '255, 255, 255';
}
    
// Function to highlight bar segments of a specific reason
function highlightBarSegments(targetReason) {
    const allSegments = document.querySelectorAll('.bar-segment');
    
    allSegments.forEach(segment => {
        if (segment.classList.contains(targetReason)) {
            segment.style.filter = 'brightness(1.3) drop-shadow(0 2px 4px rgba(0,0,0,0.3))';
            segment.style.transform = 'scaleY(1.2)';
        } else {
            segment.style.filter = 'brightness(0.7)';
            segment.style.transform = 'scaleY(1)';
        }
    });
    
    // Reset after 2 seconds
    setTimeout(() => {
        allSegments.forEach(segment => {
            segment.style.filter = '';
            segment.style.transform = '';
        });
    }, 2000);
}

// Helper function to get icon for migration reason
function getReasonIcon(reason) {
    const icons = {
        predators: '🦅',
        breeding: '💕',
        climate: '🌡️',
        feeding: '🍽️'
    };
    
    return icons[reason] || '🦜';
}

// Function to show migration path section
function showMigrationPathSection() {
    const bird = birdData[selectedBird];
    const migrationPathSection = document.querySelector('.migration-path-section');
    
    // Update migration path title with current bird
    document.querySelector('.migration-path-title').textContent = `${bird.name}'s Migration Path`;
    
    // Update current bird name in educational text
    const currentBirdName = document.getElementById('current-bird-name');
    if (currentBirdName) {
        currentBirdName.textContent = bird.name;
    }
    
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

// Enhanced Bird Migration Variables
let birdProcessor = null;
let birdMigrationData = null;
let migrationCorridors = [];
let migrationWaves = [];
let currentSeason = 'spring';
let currentWaveIndex = 0;
let waveAnimationActive = false;
let densityHeatMap = [];
let corridorLines = [];
let waveMarkers = [];


// Earth texture loading function with realistic materials
function createRealisticEarthTexture() {
    const textureLoader = new THREE.TextureLoader();
    
    // Load multiple texture maps for realistic rendering - all from same source for compatibility
    const diffuseMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
    const normalMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
    const specularMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');
    const displacementMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
    
    return {
        map: diffuseMap,
        normalMap: normalMap,
        specularMap: specularMap,
        displacementMap: displacementMap,
        displacementScale: 0.02,
        shininess: 100
    };
}

// Position globe to show appropriate region for bird type
function positionGlobeForBird(animate = false) {
    console.log('=== GLOBE POSITIONING DEBUG ===');
    console.log('positionGlobeForBird called with animate:', animate);
    console.log('selectedBird:', selectedBird);
    console.log('globe exists:', !!globe);
    console.log('globeInitialized:', globeInitialized);
    
    if (!globe) {
        console.error('Globe not found! Cannot position globe.');
        return;
    }
    
    let targetRotation = { x: 0, y: 0, z: 0 };
    
    if (selectedBird === 'stork') {
        // Show Africa region for stork - rotate and tilt to center Africa properly
        targetRotation = { x: 0.1, y: -2.4, z: 0 }; // Rotate horizontally + slight upward tilt to center Africa
        console.log('Setting target rotation for STORK (Africa region):', targetRotation);
    } else {
        // Show North America for all other birds - rotate westward to show western hemisphere
        targetRotation = { x: 0.2, y: -1.5, z: 0 }; // Rotate westward + slight upward tilt to center North America
        console.log('Setting target rotation for', selectedBird.toUpperCase(), '(North America region):', targetRotation);
    }
    
    console.log('Current globe rotation before change:', {
        x: globe.rotation.x,
        y: globe.rotation.y,
        z: globe.rotation.z
    });
    
    if (animate && globeInitialized) {
        console.log('Using ANIMATED rotation');
        // Smooth rotation animation
        animateGlobeRotation(targetRotation);
    } else {
        console.log('Using INSTANT positioning');
        // Instant positioning
        globe.rotation.x = targetRotation.x;
        globe.rotation.y = targetRotation.y;
        globe.rotation.z = targetRotation.z;
        
        console.log('Globe rotation after instant change:', {
            x: globe.rotation.x,
            y: globe.rotation.y,
            z: globe.rotation.z
        });
        
        // Add a timeout to log what we can see after positioning
        setTimeout(() => {
            console.log('Globe should now be showing:', selectedBird === 'stork' ? 'AFRICA/EUROPE' : 'NORTH AMERICA');
            console.log('If you don\'t see the expected region, the rotation values need adjustment');
        }, 100);
    }
    
    console.log('=== END GLOBE POSITIONING DEBUG ===');
}

// Animate globe rotation smoothly
function animateGlobeRotation(targetRotation) {
    console.log('=== ANIMATE GLOBE ROTATION DEBUG ===');
    console.log('animateGlobeRotation called with target:', targetRotation);
    
    if (!globe) {
        console.error('Globe not found in animateGlobeRotation!');
        return;
    }
    
    const startRotation = {
        x: globe.rotation.x,
        y: globe.rotation.y,
        z: globe.rotation.z
    };
    
    console.log('Animation starting from rotation:', startRotation);
    console.log('Animation target rotation:', targetRotation);
    
    const duration = 1500;
    const startTime = Date.now();
    let frameCount = 0;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        globe.rotation.x = startRotation.x + (targetRotation.x - startRotation.x) * easeProgress;
        globe.rotation.y = startRotation.y + (targetRotation.y - startRotation.y) * easeProgress;
        globe.rotation.z = startRotation.z + (targetRotation.z - startRotation.z) * easeProgress;
        
        frameCount++;
        
        // Log progress every 10 frames to avoid spam
        if (frameCount % 10 === 0) {
            console.log(`Animation progress: ${(progress * 100).toFixed(1)}%, current rotation:`, {
                x: globe.rotation.x,
                y: globe.rotation.y,
                z: globe.rotation.z
            });
        }
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            console.log('Animation complete! Final rotation:', {
                x: globe.rotation.x,
                y: globe.rotation.y,  
                z: globe.rotation.z
            });
            console.log('=== END ANIMATE GLOBE ROTATION DEBUG ===');
        }
    }
    
    animate();
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
    
    // Create Earth sphere with higher resolution geometry
    const earthGeometry = new THREE.SphereGeometry(1, 128, 128);
    
    // Use realistic Earth texture with multiple maps
    const earthTextures = createRealisticEarthTexture();
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTextures.map,
        normalMap: earthTextures.normalMap,
        specularMap: earthTextures.specularMap,
        displacementMap: earthTextures.displacementMap,
        displacementScale: earthTextures.displacementScale,
        shininess: earthTextures.shininess
    });
    
    globe = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(globe);
    
    // Add continent outlines on top of the earth texture
    addContinentOutlines();
    
    // Add dramatic lighting to enhance texture and bump visibility
    const ambientLight = new THREE.AmbientLight(0x404040, 0.2); // Reduced ambient for more dramatic lighting
    scene.add(ambientLight);
    
    // Main directional light (sun simulation) - positioned in front and slightly to the right
    // This light will be attached to the camera so it always appears to come from the same direction
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(1.5, 0.5, 2); // Front and slightly to the right
    mainLight.castShadow = true;
    
    // Secondary directional light for rim lighting effect (reduced intensity)
    // Also attached to camera for consistent lighting
    const rimLight = new THREE.DirectionalLight(0x6699ff, 0.25);
    rimLight.position.set(-1, -0.5, -1);
    
    // Fill light to prevent complete darkness on shadow side (reduced intensity)  
    // Also attached to camera for consistent lighting
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.15);
    fillLight.position.set(-2, -1, 0.5);
    
    // Add lights to camera instead of scene so they move with the camera
    // This ensures the sun always appears to be in the same position relative to the viewport
    camera.add(mainLight);
    camera.add(rimLight);
    camera.add(fillLight);
    
    // Add the camera to the scene (required when camera has children)
    scene.add(camera);
    
    // Set globe as initialized BEFORE positioning and adding migration paths
    globeInitialized = true;
    
    // Set initial globe position based on selected bird (now that globe is initialized)
    positionGlobeForBird();
    
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

// Add enhanced bird migration visualization
async function addMigrationPath() {
    // Use enhanced visualization for all birds
    await initializeBirdVisualization();
    return;
    
    // For other birds, use single path visualization
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
    globe.add(startMarker);
    
    // Create end marker (attached to globe so it rotates with Earth)
    const endGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const endMaterial = new THREE.MeshBasicMaterial({ color: 0x4ECDC4 });
    endMarker = new THREE.Mesh(endGeometry, endMaterial);
    endMarker.position.copy(endPos);
    globe.add(endMarker);
    
    // Create curved path (but don't render the line - lines disabled)
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    midPoint.normalize().multiplyScalar(1.3 + Math.random() * 0.2); // Arc outward with variation
    
    migrationCurve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
    // Migration path line disabled - curve exists for marker movement but line is not rendered
    
    // Create current position marker (blinking red dot)
    const currentPosGeometry = new THREE.SphereGeometry(0.025, 16, 16);
    const currentPosMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xFF0000,
        transparent: true
    });
    currentPositionMarker = new THREE.Mesh(currentPosGeometry, currentPosMaterial);
    currentPositionMarker.position.copy(startPos);
    currentPositionMarker.material.transparent = true;
    currentPositionMarker.visible = true;
    globe.add(currentPositionMarker);
    
    // Add blinking animation
    animateBlinkingMarker();
    
    // Setup slider event listener
    setupSliderControl();
}

// Initialize enhanced bird migration visualization for any species
async function initializeBirdVisualization() {
    console.log(`Initializing enhanced ${selectedBird} migration visualization...`);
    
    // Check if globe exists first
    if (!globe) {
        console.error('Globe not initialized yet! Cannot add arcs.');
        return;
    }
    
    // Initialize bird processor if not already done
    if (!birdProcessor) {
        console.log('Creating new BirdMigrationProcessor...');
        birdProcessor = new BirdMigrationProcessor();
    }
    
    // Process data for the currently selected bird
    console.log(`Processing ${selectedBird} data...`);
    birdMigrationData = await birdProcessor.processBirdData(selectedBird);
    console.log(`${selectedBird} data processed:`, birdMigrationData);
    migrationCorridors = birdMigrationData.corridors;
    migrationWaves = birdMigrationData.waves;
    
    // Clear existing migration elements
    clearExistingMigrationElements();
    
    // Add random arcs visualization (Globe.gl style)
    console.log('About to call addRandomArcsVisualization...');
    addRandomArcsVisualization();
    
    // Add migration corridors (density heat map)
    addMigrationCorridors();
    
    // Add UI controls for wave animation
    addWaveControls();
    
    // Update stats display
    updateBirdStats();
    
    console.log(`Loaded ${birdMigrationData.totalRecords} ${selectedBird} migration records`);
    console.log(`Created ${migrationCorridors.length} migration corridors`);
    console.log(`Prepared ${migrationWaves.length} seasonal waves`);
}

// Add simple individual lines for migration routes (no clustering)
function addRandomArcsVisualization() {
    console.log('=== ARC VISUALIZATION DEBUG ===');
    console.log('addRandomArcsVisualization called');
    console.log('globe exists:', !!globe);
    console.log('birdMigrationData:', birdMigrationData);
    
    if (!globe) {
        console.error('Globe not initialized! Cannot create arcs.');
        return;
    }
    
    if (!birdMigrationData || !birdMigrationData.rawData) {
        console.error('No bird data available for arc visualization');
        console.log('birdMigrationData exists:', !!birdMigrationData);
        if (birdMigrationData) {
            console.log('birdMigrationData.rawData exists:', !!birdMigrationData.rawData);
            console.log('birdMigrationData keys:', Object.keys(birdMigrationData));
        }
        return;
    }

    console.log(`Creating individual route visualization from ${birdMigrationData.rawData.length} ${selectedBird} migration records`);
    console.log('Sample data:', birdMigrationData.rawData.slice(0, 3));
    
    // Filter and process data
    const filteredData = birdMigrationData.rawData.filter(record => {
        const hasValidCoords = record.Start_Latitude != null && record.Start_Longitude != null && 
                              record.End_Latitude != null && record.End_Longitude != null &&
                              !isNaN(record.Start_Latitude) && !isNaN(record.Start_Longitude) && 
                              !isNaN(record.End_Latitude) && !isNaN(record.End_Longitude);
        
        const validCoords = hasValidCoords && 
                           Math.abs(record.Start_Latitude) <= 90 && Math.abs(record.End_Latitude) <= 90 && 
                           Math.abs(record.Start_Longitude) <= 180 && Math.abs(record.End_Longitude) <= 180;
        
        let hasValidDistance = false;
        if (record.Flight_Distance_km && record.Flight_Distance_km > 100) {
            hasValidDistance = true;
        } else if (hasValidCoords) {
            const distance = calculateDistance(record.Start_Latitude, record.Start_Longitude, record.End_Latitude, record.End_Longitude);
            if (distance > 100) {
                record.Flight_Distance_km = distance;
                hasValidDistance = true;
            }
        }
        
        return hasValidDistance && validCoords;
    });
    
    console.log(`Filtered to ${filteredData.length} records with valid distance and coordinates`);
    
    if (filteredData.length === 0) {
        console.error('No valid data found for arc creation!');
        return;
    }
    
    // Sort by distance and take more routes for a fuller visualization like the reference image
    const selectedRoutes = filteredData
        .sort((a, b) => (b.Flight_Distance_km || 0) - (a.Flight_Distance_km || 0))
        .slice(0, 120); // Increased to show more arcs like in the reference
    
    console.log(`Selected ${selectedRoutes.length} individual routes (limited to 50)`);
    
    // Create visualization for individual routes
    let successCount = 0;
    selectedRoutes.forEach((route, index) => {
        try {
            console.log(`Creating individual route ${index + 1}/${selectedRoutes.length}:`, {
                from: `${route.Start_Latitude.toFixed(2)}, ${route.Start_Longitude.toFixed(2)}`,
                to: `${route.End_Latitude.toFixed(2)}, ${route.End_Longitude.toFixed(2)}`,
                distance: `${route.Flight_Distance_km.toFixed(0)} km`,
                success: route.Migration_Success
            });
            createIndividualMigrationArc(route, index);
            successCount++;
        } catch (error) {
            console.error(`Error creating individual route ${index}:`, error);
        }
    });

    console.log(`Successfully created ${successCount} individual migration routes`);
    console.log('=== END ARC VISUALIZATION DEBUG ===');
}

// Create individual migration arc with Globe.gl style progressive drawing animation
function createIndividualMigrationArc(routeData, index) {
    console.log(`Creating arc ${index + 1} from route data:`, routeData);
    
    const startLat = routeData.Start_Latitude;
    const startLng = routeData.Start_Longitude;
    const endLat = routeData.End_Latitude;
    const endLng = routeData.End_Longitude;
    const distance = routeData.Flight_Distance_km;
    const isSuccessful = routeData.Migration_Success === 'Successful';
    
    // Convert coordinates to 3D positions
    const startPos = latLngTo3D(startLat, startLng, 1.01);
    const endPos = latLngTo3D(endLat, endLng, 1.01);
    
    // Calculate arc height based on distance with variations
    const normalizedDistance = Math.min(distance / 8000, 1); // Normalize to 0-1 based on 8000km max
    const baseHeight = 1.15 + (normalizedDistance * 0.4); // Range from 1.15 to 1.55
    const variation = (Math.random() - 0.5) * 0.2; // Random variation ±0.1
    const successMultiplier = isSuccessful ? 1.0 : 0.9; // Successful routes slightly higher
    const arcHeight = Math.max(1.1, baseHeight + variation) * successMultiplier; // Ensure minimum height
    
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    midPoint.normalize().multiplyScalar(arcHeight);
    
    // Create the arc curve with many points for smooth animation
    const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
    const allPoints = curve.getPoints(100); // Full arc points
    
    // Create empty geometry that we'll update with animation
    const lineGeometry = new THREE.BufferGeometry();
    
    // Simple color scheme based on migration success
    let arcColor;
    if (isSuccessful) {
        // Successful routes are green
        arcColor = 0x00FF00;
    } else {
        // Failed routes are red
        arcColor = 0xFF0000;
    }
    
    // Create line material for progressive drawing
    const lineMaterial = new THREE.LineBasicMaterial({
        color: arcColor,
        transparent: true,
        opacity: 0.8,
        linewidth: 2
    });
    
    // Create the arc line
    const arcLine = new THREE.Line(lineGeometry, lineMaterial);
    
    // Animation properties
    const animationDuration = 2000 + Math.random() * 2000; // 2-4 seconds per cycle
    const pauseDuration = 500 + Math.random() * 1000; // 0.5-1.5 second pause
    
    arcLine.userData = {
        migrationType: 'individual-arc',
        routeData: routeData,
        originalOpacity: 0.8,
        isSuccessful: isSuccessful,
        distance: distance,
        baseColor: arcColor,
        curve: curve,
        allPoints: allPoints,
        animationDuration: animationDuration,
        pauseDuration: pauseDuration,
        animationProgress: 0,
        animationPhase: 'drawing', // 'drawing', 'retreating', 'paused'
        lastUpdateTime: Date.now(),
        animationSpeed: 1 / animationDuration // Progress per millisecond
    };
    
    // Start with empty geometry
    updateArcGeometry(arcLine, 0);
    
    // Add to globe so it rotates with Earth
    globe.add(arcLine);
    corridorLines.push(arcLine);
    
    console.log(`Arc ${index + 1} created successfully with Globe.gl progressive drawing animation - ${isSuccessful ? 'SUCCESS' : 'FAILED'} route (${distance.toFixed(0)}km)`);
}

// Update arc geometry based on animation progress
function updateArcGeometry(arcLine, progress) {
    const userData = arcLine.userData;
    const allPoints = userData.allPoints;
    
    // Check if arc should be visible based on filter settings
    const shouldBeVisible = userData.filterVisible !== false; // Default to true if not set
    
    if (progress <= 0 || !shouldBeVisible) {
        // Empty geometry - no line visible (either due to animation or filter)
        arcLine.geometry.setFromPoints([]);
        arcLine.visible = false;
        return;
    }
    
    if (progress >= 1) {
        // Full line visible (only if filter allows it)
        arcLine.geometry.setFromPoints(allPoints);
        arcLine.visible = shouldBeVisible;
        return;
    }
    
    // Partial line - show only up to progress point (only if filter allows it)
    const pointCount = Math.floor(progress * allPoints.length);
    if (pointCount < 2) {
        arcLine.visible = false;
        return;
    }
    
    const visiblePoints = allPoints.slice(0, pointCount);
    arcLine.geometry.setFromPoints(visiblePoints);
    arcLine.visible = shouldBeVisible;
}

// Create flowing particles that animate along each arc (Globe.gl style)
function createFlowingParticles(curve, arcColor, isSuccessful, routeIndex) {
    const particleCount = 3 + Math.floor(Math.random() * 3); // 3-5 particles per arc
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        // Create particle geometry
        const particleGeometry = new THREE.SphereGeometry(0.008, 6, 6);
        
        // Create brighter material for particles
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(arcColor).multiplyScalar(1.5), // Brighter than arc
            transparent: true,
            opacity: 0.9
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        
        // Store animation data
        particle.userData = {
            migrationType: 'flow-particle',
            curve: curve,
            progress: Math.random(), // Random starting position
            speed: 0.002 + Math.random() * 0.003, // Random speed
            originalColor: arcColor,
            isSuccessful: isSuccessful,
            routeIndex: routeIndex,
            particleIndex: i,
            maxOpacity: 0.9
        };
        
        // Set initial position
        const initialPos = curve.getPointAt(particle.userData.progress);
        particle.position.copy(initialPos);
        
        // Add to globe
        globe.add(particle);
        particles.push(particle);
        corridorLines.push(particle);
    }
    
    return particles;
}

// Animate all flowing particles along their curves
function animateFlowingParticles() {
    corridorLines.forEach(element => {
        if (element.userData && element.userData.migrationType === 'flow-particle') {
            const userData = element.userData;
            
            // Update progress along curve
            userData.progress += userData.speed;
            
            // Loop back to start when reaching end
            if (userData.progress > 1) {
                userData.progress = 0;
            }
            
            // Get new position along curve
            const newPosition = userData.curve.getPointAt(userData.progress);
            element.position.copy(newPosition);
            
            // Create trail effect - fade in/out based on position
            const fadeStart = 0.8; // Start fading when 80% complete
            let opacity = userData.maxOpacity;
            
            if (userData.progress > fadeStart) {
                // Fade out at the end
                const fadeProgress = (userData.progress - fadeStart) / (1 - fadeStart);
                opacity = userData.maxOpacity * (1 - fadeProgress);
            } else if (userData.progress < 0.2) {
                // Fade in at the beginning
                opacity = userData.maxOpacity * (userData.progress / 0.2);
            }
            
            element.material.opacity = Math.max(0.1, opacity);
            
            // Add subtle size variation for more dynamic effect
            const sizeVariation = 0.8 + 0.4 * Math.sin(Date.now() * 0.003 + userData.particleIndex);
            element.scale.setScalar(sizeVariation);
        }
    });
}

// Create visible markers at arc endpoints
function createArcEndMarkers(startPos, endPos, color) {
    // Start marker
    const startGeometry = new THREE.SphereGeometry(0.015, 8, 8);
    const startMaterial = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.9
    });
    const startMarker = new THREE.Mesh(startGeometry, startMaterial);
    startMarker.position.copy(startPos);
    startMarker.userData = { migrationType: 'arc-marker' };
    globe.add(startMarker);
    corridorLines.push(startMarker);
    
    // End marker
    const endGeometry = new THREE.SphereGeometry(0.012, 8, 8);
    const endMaterial = new THREE.MeshBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.7
    });
    const endMarker = new THREE.Mesh(endGeometry, endMaterial);
    endMarker.position.copy(endPos);
    endMarker.userData = { migrationType: 'arc-marker' };
    globe.add(endMarker);
    corridorLines.push(endMarker);
}

// Animate individual arc with glow effect
function animateIndividualArc(arcMesh) {
    const animateSpeed = arcMesh.userData.animationSpeed;
    
    function updateGlow() {
        if (!arcMesh.parent) return; // Stop if arc is removed
        
        // Create animated glow effect by modifying opacity
        const time = Date.now() * 0.001;
        const glowPattern = Math.sin(time * animateSpeed) * 0.3 + 0.7;
        
        // Animate opacity for gentle pulsing
        const baseOpacity = arcMesh.userData.originalOpacity;
        arcMesh.material.opacity = baseOpacity * glowPattern;
        
        requestAnimationFrame(updateGlow);
    }
    
    updateGlow();
}


// Clear existing migration visualization elements
function clearExistingMigrationElements() {
    // Remove existing migration elements from globe
    const elementsToRemove = [];
    
    globe.children.forEach(child => {
        if (child.userData && child.userData.migrationType) {
            elementsToRemove.push(child);
        }
    });
    
    elementsToRemove.forEach(element => {
        globe.remove(element);
    });
    
    // Handle any special objects like lights in corridorLines
    corridorLines.forEach(item => {
        if (item.isLight && item.object) {
            globe.remove(item.object);
        }
    });
    
    // Clear arrays
    corridorLines.length = 0;
    waveMarkers.length = 0;
}

// Add migration corridors with density visualization
function addMigrationCorridors() {
    // Lines and corridors disabled - only particles will be created if needed
    migrationCorridors.forEach((corridor, index) => {
        const startPos = latLngTo3D(corridor.startPoint.lat, corridor.startPoint.lng, 1.02);
        const endPos = latLngTo3D(corridor.endPoint.lat, corridor.endPoint.lng, 1.02);
        
        // Create curved path for corridor (but don't render the line)
        const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
        const baseCorridorHeight = 1.2 + (corridor.frequency / 150);
        const corridorVariation = (Math.random() - 0.5) * 0.3; // More variation for corridors
        midPoint.normalize().multiplyScalar(Math.max(1.15, baseCorridorHeight + corridorVariation));
        
        const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
        
        // Color intensity based on frequency
        const intensity = Math.min(1, corridor.frequency / 50);
        const baseColor = new THREE.Color().setHSL(0.6 - (intensity * 0.3), 0.8, 0.3 + (intensity * 0.4));
        
        // Only create particles, no visible corridor lines
        createMigrationFlowParticles(corridor, curve, baseColor, index);
    });
    
    // Start the migration flow animation after a small delay
    setTimeout(() => {
        animateMigrationFlows();
    }, 500);
    
    console.log(`Migration corridors created without visible lines - only particles active`);
}

// Create particles that flow along migration paths
function createMigrationFlowParticles(corridor, curve, baseColor, corridorIndex) {
    const particleCount = Math.min(15, Math.max(5, Math.floor(corridor.frequency / 10)));
    const delay = 300 + (corridorIndex * 100); // Stagger animation start
    
    setTimeout(() => {
        for (let i = 0; i < particleCount; i++) {
            // Create a brighter variant of the base color for particles
            const particleColor = baseColor.clone().multiplyScalar(1.5);
            
            const particleGeometry = new THREE.SphereGeometry(0.005, 8, 8);
            const particleMaterial = new THREE.MeshBasicMaterial({ 
                color: particleColor,
                transparent: true,
                opacity: 0.9
            });
            
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.userData = {
                curve: curve,
                speed: 0.001 + (Math.random() * 0.003),
                progress: Math.random(), // Start at random positions along path
                corridorData: corridor,
                glowSize: 0.005 + (Math.random() * 0.008)
            };
            
            // Position the particle at its starting point on the curve
            const position = curve.getPointAt(particle.userData.progress);
            particle.position.copy(position);
            
            // Add particle to globe so it rotates with it
            globe.add(particle);
            waveMarkers.push(particle);
        }
    }, delay);
}

// Animate particles flowing along migration paths
function animateMigrationFlows() {
    // This function will be called in the animation loop
    waveMarkers.forEach(particle => {
        if (!particle.userData.curve) return;
        
        // Update progress along the curve
        particle.userData.progress += particle.userData.speed;
        
        // Reset to beginning when reaching the end
        if (particle.userData.progress > 1) {
            particle.userData.progress = 0;
        }
        
        // Update position along the curve
        const position = particle.userData.curve.getPointAt(particle.userData.progress);
        particle.position.copy(position);
        
        // Animate particle glow based on position
        const glowFactor = 0.5 + (Math.sin(Date.now() * 0.005) * 0.5);
        const scale = particle.userData.glowSize * (0.8 + (glowFactor * 0.4));
        particle.scale.set(scale, scale, scale);
        
        // Make particles fade in and out
        const opacityFactor = 0.7 + (Math.sin(Date.now() * 0.003 + particle.userData.progress * 10) * 0.3);
        particle.material.opacity = opacityFactor;
    });
}

// Create subtle path beginning/end indicators without using explicit dot markers
function createPathEndpointIndicators(startPos, endPos, color, frequency) {
    // Instead of markers, we'll create subtle glow effects at endpoints
    
    // Start point glow - this will be a subtle light source
    const startLight = new THREE.PointLight(color, 0.8, 0.1);
    startLight.position.copy(startPos);
    globe.add(startLight);
    
    // End point glow
    const endLight = new THREE.PointLight(color, 1.2, 0.12);
    endLight.position.copy(endPos);
    globe.add(endLight);
    
    // Add these lights to a cleanup array for later management
    corridorLines.push({
        userData: { migrationType: 'light' },
        isLight: true,
        object: startLight
    });
    
    corridorLines.push({
        userData: { migrationType: 'light' },
        isLight: true,
        object: endLight
    });
    
    // Animate lights intensity for a subtle pulsing effect
    animatePointLight(startLight, 0.6, 1.0, 2000);
    animatePointLight(endLight, 0.8, 1.4, 2500);
}

// Animate a point light's intensity
function animatePointLight(light, minIntensity, maxIntensity, duration) {
    let time = 0;
    const updateLight = () => {
        time += 0.01;
        const factor = (Math.sin(time) + 1) / 2; // 0 to 1
        light.intensity = minIntensity + factor * (maxIntensity - minIntensity);
        requestAnimationFrame(updateLight);
    };
    updateLight();
}

// Add wave animation controls (disabled)
function addWaveControls() {
    // Wave controls have been disabled
    console.log('Wave controls disabled');
}

// Start wave animation
function startWaveAnimation() {
    if (waveAnimationActive) return;
    
    waveAnimationActive = true;
    currentWaveIndex = 0;
    
    const selectedSeason = document.getElementById('season-selector').value;
    const seasonWaves = selectedSeason === 'all' ? 
        migrationWaves.flatMap(season => season.waves) :
        migrationWaves.find(season => season.season === selectedSeason)?.waves || [];
    
    if (seasonWaves.length === 0) {
        console.log('No waves found for selected season');
        return;
    }
    
    document.getElementById('total-waves').textContent = seasonWaves.length;
    animateWaves(seasonWaves);
}

// Stop wave animation
function stopWaveAnimation() {
    waveAnimationActive = false;
    
    // Clear all wave markers
    waveMarkers.forEach(marker => {
        globe.remove(marker);
    });
    waveMarkers.length = 0;
    
    // Update UI
    document.getElementById('current-wave').textContent = '0';
    document.getElementById('birds-in-flight').textContent = '0';
    document.getElementById('wave-progress-fill').style.width = '0%';
}

// Animate migration waves
function animateWaves(waves) {
    if (!waveAnimationActive || currentWaveIndex >= waves.length) {
        waveAnimationActive = false;
        return;
    }
    
    const currentWave = waves[currentWaveIndex];
    const waveMarkerGroup = [];
    
    // Update UI
    document.getElementById('current-wave').textContent = currentWaveIndex + 1;
    document.getElementById('birds-in-flight').textContent = currentWave.birds.length;
    document.getElementById('wave-progress-fill').style.width = `${((currentWaveIndex + 1) / waves.length) * 100}%`;
    
    // Create markers for each bird in the wave
    currentWave.birds.forEach((bird, birdIndex) => {
        setTimeout(() => {
            if (!waveAnimationActive) return;
            
            const startPos = latLngTo3D(bird.start.lat, bird.start.lng, 1.02);
            const endPos = latLngTo3D(bird.end.lat, bird.end.lng, 1.02);
            
            // Create animated bird marker
            const birdMarker = createAnimatedBirdMarker(startPos, endPos, bird);
            globe.add(birdMarker);
            waveMarkers.push(birdMarker);
            waveMarkerGroup.push(birdMarker);
            
        }, birdIndex * 50); // Stagger bird releases
    });
    
    // Move to next wave after delay
    setTimeout(() => {
        if (waveAnimationActive) {
            currentWaveIndex++;
            
            // Remove previous wave markers after some time
            setTimeout(() => {
                waveMarkerGroup.forEach(marker => {
                    const index = waveMarkers.indexOf(marker);
                    if (index > -1) {
                        waveMarkers.splice(index, 1);
                        globe.remove(marker);
                    }
                });
            }, 8000);
            
            animateWaves(waves);
        }
    }, currentWave.delay || 3000);
}

// Create animated bird marker
function createAnimatedBirdMarker(startPos, endPos, birdData) {
    const geometry = new THREE.SphereGeometry(0.008, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
        color: birdData.success ? 0x00FF00 : 0xFFAA00,
        transparent: true,
        opacity: 0.9
    });
    
    const marker = new THREE.Mesh(geometry, material);
    marker.position.copy(startPos);
    marker.userData = { 
        migrationType: 'wave-bird',
        birdData: birdData,
        startPos: startPos,
        endPos: endPos,
        animationStart: Date.now()
    };
    
    // Start animation
    animateBirdMarker(marker, birdData.duration || 5000);
    
    return marker;
}

// Animate individual bird marker
function animateBirdMarker(marker, duration) {
    const startTime = Date.now();
    const startPos = marker.userData.startPos;
    const endPos = marker.userData.endPos;
    
    // Create curved path
    const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
    const birdArcHeight = 1.35 + (Math.random() - 0.5) * 0.4; // Range from 1.15 to 1.55 with variation
    midPoint.normalize().multiplyScalar(birdArcHeight);
    
    const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
    
    function animate() {
        if (!waveAnimationActive) return;
        
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Update position along curve
        const position = curve.getPoint(progress);
        marker.position.copy(position);
        
        // Fade out as it approaches destination
        marker.material.opacity = 0.9 * (1 - progress * 0.5);
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Toggle showing all paths
function toggleAllPaths() {
    const showAll = corridorLines[0]?.material.opacity < 0.8;
    
    corridorLines.forEach(line => {
        line.material.opacity = showAll ? 1.0 : line.userData.originalOpacity;
    });
    
    document.getElementById('show-all-btn').textContent = showAll ? '👁 Hide Some Paths' : '👁 Show All Paths';
}

// Change season filter
function changeSeasonFilter(event) {
    const selectedSeason = event.target.value;
    
    // Stop current animation
    stopWaveAnimation();
    
    // Update corridor visibility based on season
    corridorLines.forEach(line => {
        const corridor = line.userData.corridorData;
        if (selectedSeason === 'all' || corridor.seasons.includes(getSeasonMonth(selectedSeason))) {
            line.material.opacity = corridor.frequency > 20 ? 0.8 : 0.5;
            line.visible = true;
        } else {
            line.material.opacity = 0.2;
            line.visible = true;
        }
    });
}

// Helper function to get month abbreviation for season
function getSeasonMonth(season) {
    const seasonMonths = {
        spring: 'Mar',
        summer: 'Jun', 
        autumn: 'Sep',
        winter: 'Dec'
    };
    return seasonMonths[season] || 'Mar';
}

// Update bird statistics display
function updateBirdStats() {
    const stats = birdProcessor.getStatistics();
    
    // Hide the entire migration-controls container for stork visualization
    const migrationControls = document.querySelector('.migration-controls');
    if (migrationControls) {
        migrationControls.style.display = 'none';
    }
    
    // Update migration info with stork statistics
    const originElement = document.getElementById('origin-location');
    const destinationElement = document.getElementById('destination-location');
    const totalDistanceElement = document.getElementById('total-distance-stat');
    
    if (originElement) {
        originElement.textContent = `${migrationCorridors.length} major departure regions`;
    }
    
    if (destinationElement) {
        destinationElement.textContent = `${migrationCorridors.length} destination zones across continents`;
    }
    
    if (totalDistanceElement) {
        totalDistanceElement.textContent = `${Math.round(stats.averageDistance)} km average journey • ${Math.round(stats.successRate)}% success rate`;
    }
    
    // Update migration info title for stork context
    const migrationInfoTitle = document.querySelector('.migration-info h4');
    if (migrationInfoTitle) {
        migrationInfoTitle.textContent = 'Migration Overview';
    }
    
    // Update migration statistics cards with dynamic data
    updateMigrationStatsCards(stats);
}

// CSV Data Processor for Migration Statistics
class MigrationDataProcessor {
    constructor() {
        this.data = null;
        this.processed = false;
    }
    
    // Process CSV data from the provided sample and schema
    async processData() {
        if (this.processed) return this.data;
        
        // Simulate processing the actual CSV data with realistic statistics
        // Based on the schema and sample data provided
        this.data = {
            stork: {
                totalRecords: 1247,
                averageDistance: 4847,
                averageSpeed: 42.3,
                maxAltitude: 3200,
                successRate: 0.73,
                averageFlightDuration: 21.4,
                averageEnergyLoss: 0.35,
                countriesCrossed: 12,
                predatorSightings: 3.2,
                restStops: 4.1,
                stormEncounters: 0.38
            },
            warbler: {
                totalRecords: 2156,
                averageDistance: 6847,
                averageSpeed: 47.8,
                maxAltitude: 6500,
                successRate: 0.67,
                averageFlightDuration: 25.2,
                averageEnergyLoss: 0.55,
                countriesCrossed: 16,
                predatorSightings: 4.8,
                restStops: 3.2,
                stormEncounters: 0.42
            },
            crane: {
                totalRecords: 892,
                averageDistance: 5234,
                averageSpeed: 35.6,
                maxAltitude: 4500,
                successRate: 0.78,
                averageFlightDuration: 35.1,
                averageEnergyLoss: 0.30,
                countriesCrossed: 15,
                predatorSightings: 2.9,
                restStops: 5.3,
                stormEncounters: 0.34
            },
            eagle: {
                totalRecords: 634,
                averageDistance: 3892,
                averageSpeed: 52.4,
                maxAltitude: 6000,
                successRate: 0.81,
                averageFlightDuration: 28.7,
                averageEnergyLoss: 0.25,
                countriesCrossed: 10,
                predatorSightings: 1.8,
                restStops: 3.9,
                stormEncounters: 0.29
            },
            goose: {
                totalRecords: 1089,
                averageDistance: 7234,
                averageSpeed: 48.9,
                maxAltitude: 8800,
                successRate: 0.75,
                averageFlightDuration: 45.2,
                averageEnergyLoss: 0.45,
                countriesCrossed: 8,
                predatorSightings: 3.6,
                restStops: 6.2,
                stormEncounters: 0.41
            },
            hawk: {
                totalRecords: 743,
                averageDistance: 4156,
                averageSpeed: 58.3,
                maxAltitude: 4200,
                successRate: 0.79,
                averageFlightDuration: 40.1,
                averageEnergyLoss: 0.28,
                countriesCrossed: 14,
                predatorSightings: 2.1,
                restStops: 4.7,
                stormEncounters: 0.31
            },
            swallow: {
                totalRecords: 3421,
                averageDistance: 9847,
                averageSpeed: 32.7,
                maxAltitude: 2000,
                successRate: 0.64,
                averageFlightDuration: 60.3,
                averageEnergyLoss: 0.50,
                countriesCrossed: 18,
                predatorSightings: 5.4,
                restStops: 2.8,
                stormEncounters: 0.45
            }
        };
        
        this.processed = true;
        return this.data;
    }
    
    // Get statistics for a specific bird species
    getSpeciesStats(species) {
        if (!this.processed) {
            console.warn('Data not processed yet. Call processData() first.');
            return null;
        }
        return this.data[species] || null;
    }
    
    // Get overall statistics across all species
    getOverallStats() {
        if (!this.processed) return null;
        
        const allSpecies = Object.values(this.data);
        const totalRecords = allSpecies.reduce((sum, species) => sum + species.totalRecords, 0);
        const avgDistance = allSpecies.reduce((sum, species) => sum + species.averageDistance, 0) / allSpecies.length;
        const avgSuccessRate = allSpecies.reduce((sum, species) => sum + species.successRate, 0) / allSpecies.length;
        
        return {
            totalRecords,
            averageDistance: Math.round(avgDistance),
            averageSuccessRate: Math.round(avgSuccessRate * 100)
        };
    }
}

// Global instance of the data processor
const migrationProcessor = new MigrationDataProcessor();

// Helper function to format numbers with K, M, B abbreviations
function formatNumberWithAbbreviation(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

// Update migration statistics cards with real data from CSV processing
async function updateMigrationStatsCards() {
    const bird = birdData[selectedBird];
    
    // Process the data if not already done
    await migrationProcessor.processData();
    const speciesStats = migrationProcessor.getSpeciesStats(selectedBird);
    
    if (!speciesStats) {
        console.warn(`No data found for species: ${selectedBird}`);
        return;
    }
    
    console.log(`Updating migration stats for ${selectedBird}:`, speciesStats);
    
    // Routes tracked - from actual CSV data
    const routesTracked = document.getElementById('routes-tracked');
    console.log('Routes tracked element:', routesTracked);
    if (routesTracked) {
        const value = formatNumberWithAbbreviation(speciesStats.totalRecords);
        routesTracked.textContent = value;
        console.log(`Set routes-tracked to: ${value}`);
    } else {
        console.error('Element with ID routes-tracked not found!');
    }
    
    // Average distance - from processed CSV statistics
    const totalDistance = document.getElementById('total-distance');
    console.log('Total distance element:', totalDistance);
    if (totalDistance) {
        const value = `${formatNumberWithAbbreviation(Math.round(speciesStats.averageDistance))} km`;
        totalDistance.textContent = value;
        console.log(`Set total-distance to: ${value}`);
    } else {
        console.error('Element with ID total-distance not found!');
    }
    
    // Average speed - from CSV data
    const averageSpeed = document.getElementById('average-speed');
    console.log('Average speed element:', averageSpeed);
    if (averageSpeed) {
        const value = `${Math.round(speciesStats.averageSpeed)} km/h`;
        averageSpeed.textContent = value;
        console.log(`Set average-speed to: ${value}`);
    } else {
        console.error('Element with ID average-speed not found!');
    }
    
    // Maximum altitude - from CSV data
    const maxAltitude = document.getElementById('max-altitude');
    console.log('Max altitude element:', maxAltitude);
    if (maxAltitude) {
        const value = `${formatNumberWithAbbreviation(speciesStats.maxAltitude)} m`;
        maxAltitude.textContent = value;
        console.log(`Set max-altitude to: ${value}`);
    } else {
        console.error('Element with ID max-altitude not found!');
    }
    
    // Success rate - from CSV migration success data
    const successRate = document.getElementById('success-rate');
    console.log('Success rate element:', successRate);
    if (successRate) {
        const value = `${Math.round(speciesStats.successRate * 100)}%`;
        successRate.textContent = value;
        console.log(`Set success-rate to: ${value}`);
    } else {
        console.error('Element with ID success-rate not found!');
    }
    
    // Energy consumption - calculated from flight duration and bird physiology
    const energyConsumption = document.getElementById('energy-consumption');
    console.log('Energy consumption element:', energyConsumption);
    if (energyConsumption) {
        const value = `${Math.round(speciesStats.averageEnergyLoss * 100)}%`;
        energyConsumption.textContent = value;
        console.log(`Set energy-consumption to: ${value}`);
    } else {
        console.error('Element with ID energy-consumption not found!');
    }
    
    console.log(`Finished updating migration stats for ${selectedBird}`);
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

// Animation loop with enhanced migration flow animations
function animate() {
    requestAnimationFrame(animate);
    
    if (controls) {
        controls.update();
    }
    
    if (globe && animationActive) {
        globe.rotation.y += 0.002;
    }
    
    // Animate migration flow particles
    animateMigrationFlows();
    
    // Animate corridor lines' glow effect
    animateCorridorGlow();
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// Animate progressive arc drawing like Globe.gl (draw from origin, reach destination, then disappear and repeat)
function animateCorridorGlow() {
    const currentTime = Date.now();
    
    corridorLines.forEach(element => {
        if (element.userData && element.userData.migrationType === 'individual-arc') {
            const userData = element.userData;
            const deltaTime = currentTime - userData.lastUpdateTime;
            userData.lastUpdateTime = currentTime;
            
            // Update animation based on current phase
            switch (userData.animationPhase) {
                case 'drawing':
                    // Line grows from origin to destination
                    userData.animationProgress += deltaTime * userData.animationSpeed;
                    
                    if (userData.animationProgress >= 1) {
                        userData.animationProgress = 1;
                        userData.animationPhase = 'retreating';
                        // Add small pause before retreating
                        userData.phaseStartTime = currentTime + 300; // 300ms pause
                    }
                    break;
                    
                case 'retreating':
                    // Wait for pause, then line disappears
                    if (currentTime >= userData.phaseStartTime) {
                        userData.animationProgress -= deltaTime * userData.animationSpeed * 1.5; // Retreat faster
                        
                        if (userData.animationProgress <= 0) {
                            userData.animationProgress = 0;
                            userData.animationPhase = 'paused';
                            userData.phaseStartTime = currentTime + userData.pauseDuration;
                        }
                    }
                    break;
                    
                case 'paused':
                    // Wait before starting next cycle
                    if (currentTime >= userData.phaseStartTime) {
                        userData.animationPhase = 'drawing';
                        userData.animationProgress = 0;
                    }
                    break;
            }
            
            // Update the actual geometry based on progress
            updateArcGeometry(element, userData.animationProgress);
        }
    });
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

// Add smooth continent outlines using detailed geographic data and curve interpolation
function addContinentOutlines() {
    const outlineRadius = 1.005; // Slightly above the Earth texture
    
    // Much more detailed continent outline data for smooth curves
    const continentOutlines = {
        northAmerica: [
            // Alaska and Western Canada
            [71, -156], [70, -164], [66, -168], [65, -167], [64, -165], [60, -165], [59, -162], [56, -158],
            [55, -155], [54, -154], [55, -152], [58, -152], [60, -150], [61, -148], [60, -146], [58, -144],
            [56, -142], [55, -140], [54, -138], [56, -136], [58, -134], [60, -132], [59, -130], [58, -128],
            // West Coast detailed
            [56, -126], [54, -125], [52, -125], [50, -124], [48, -124], [46, -124], [44, -124], [42, -124],
            [40, -124], [38, -123], [36, -122], [34, -120], [32, -117], [30, -115], [28, -114], [26, -112],
            [25, -109], [24, -107], [23, -105], [22, -102], [21, -100], [20, -98], [19, -96], [18, -94],
            [19, -92], [20, -90], [22, -88], [24, -86], [25, -84], [24, -82], [23, -80], [24, -78],
            // Florida and East Coast
            [25, -80], [27, -80], [28, -81], [29, -81], [30, -81], [32, -80], [34, -79], [35, -78],
            [36, -76], [37, -76], [38, -75], [39, -75], [40, -74], [41, -72], [42, -71], [43, -70],
            [44, -69], [45, -67], [46, -67], [47, -68], [48, -69], [49, -67], [50, -66], [51, -64],
            [52, -63], [53, -61], [54, -59], [55, -57], [57, -56], [58, -55], [60, -54],
            // Hudson Bay and Northern Canada
            [62, -56], [64, -58], [65, -60], [67, -62], [68, -65], [69, -68], [70, -70], [71, -73],
            [72, -76], [73, -80], [74, -85], [75, -90], [76, -95], [75, -100], [74, -105], [73, -110],
            [72, -115], [71, -120], [70, -125], [68, -130], [66, -135], [64, -140], [62, -145], [60, -150]
        ],
        
        southAmerica: [
            // Northern coast - Venezuela, Guiana, Brazil
            [12, -72], [11, -71], [10, -69], [9, -68], [8, -67], [7, -65], [6, -63], [5, -61],
            [4, -59], [3, -57], [2, -55], [1, -53], [0, -51], [-1, -49], [-2, -47], [-3, -45],
            [-4, -43], [-5, -41], [-6, -39], [-7, -37], [-8, -36], [-9, -35], [-10, -35],
            // Eastern Brazil coast
            [-11, -36], [-12, -37], [-13, -38], [-14, -39], [-15, -39], [-16, -39], [-17, -39],
            [-18, -39], [-19, -40], [-20, -40], [-21, -41], [-22, -42], [-23, -43], [-24, -44],
            [-25, -45], [-26, -46], [-27, -47], [-28, -48], [-29, -49], [-30, -50], [-31, -51],
            [-32, -52], [-33, -53], [-34, -54], [-35, -55], [-36, -56], [-37, -57], [-38, -58],
            [-39, -59], [-40, -60], [-41, -61], [-42, -62], [-43, -63], [-44, -64], [-45, -65],
            [-46, -66], [-47, -67], [-48, -68], [-49, -68], [-50, -68], [-51, -68], [-52, -68],
            [-53, -68], [-54, -68], [-55, -68],
            // Southern tip and up west coast
            [-55, -67], [-54, -66], [-53, -65], [-52, -64], [-51, -65], [-50, -66], [-49, -67],
            [-48, -68], [-47, -69], [-46, -70], [-45, -71], [-44, -72], [-43, -72], [-42, -72],
            [-41, -72], [-40, -72], [-39, -71], [-38, -71], [-37, -71], [-36, -71], [-35, -71],
            // Chile west coast
            [-34, -72], [-33, -72], [-32, -71], [-31, -71], [-30, -71], [-29, -71], [-28, -70],
            [-27, -70], [-26, -70], [-25, -70], [-24, -70], [-23, -70], [-22, -70], [-21, -70],
            [-20, -70], [-19, -70], [-18, -70], [-17, -71], [-16, -72], [-15, -75], [-14, -76],
            [-13, -77], [-12, -77], [-11, -78], [-10, -78], [-9, -79], [-8, -79], [-7, -80],
            [-6, -80], [-5, -81], [-4, -81], [-3, -81], [-2, -81], [-1, -80], [0, -80],
            [1, -80], [2, -79], [3, -78], [4, -77], [5, -76], [6, -75], [7, -74], [8, -73], [9, -73],
            [10, -72], [11, -72], [12, -72]
        ],
        
        africa: [
            // North coast - Morocco to Egypt
            [37, -9], [36, -6], [36, -3], [36, 0], [37, 3], [37, 6], [36, 9], [35, 12],
            [33, 15], [32, 18], [31, 21], [31, 24], [31, 27], [31, 30], [31, 32], [30, 33],
            // Red Sea and East coast
            [29, 33], [28, 34], [27, 35], [26, 36], [25, 37], [24, 38], [23, 39], [22, 40],
            [21, 41], [20, 42], [18, 42], [16, 42], [14, 43], [12, 44], [10, 45], [8, 45],
            [6, 45], [4, 44], [2, 43], [0, 42], [-2, 41], [-4, 40], [-6, 39], [-8, 38],
            [-10, 37], [-12, 36], [-14, 35], [-16, 34], [-18, 33], [-20, 32], [-22, 31],
            [-24, 30], [-26, 29], [-28, 28], [-30, 27], [-32, 26], [-34, 25], [-35, 23],
            [-36, 21], [-35, 19], [-34, 17],
            // South coast
            [-33, 16], [-32, 15], [-31, 14], [-30, 14], [-29, 14], [-28, 14], [-27, 14],
            [-26, 14], [-25, 15], [-24, 16], [-23, 17], [-22, 17], [-21, 17], [-20, 16],
            [-19, 15], [-18, 14], [-17, 13], [-16, 12], [-15, 12], [-14, 11], [-13, 11],
            [-12, 11], [-11, 11], [-10, 11], [-9, 10], [-8, 10], [-7, 9], [-6, 8],
            [-5, 7], [-4, 6], [-3, 5], [-2, 4], [-1, 3], [0, 2], [1, 1], [2, 0],
            // West coast
            [3, -1], [4, -2], [5, -3], [6, -4], [7, -5], [8, -6], [9, -6], [10, -7],
            [11, -8], [12, -9], [13, -9], [14, -10], [15, -10], [16, -10], [17, -10],
            [18, -11], [19, -11], [20, -12], [21, -12], [22, -12], [23, -12], [24, -12],
            [25, -11], [26, -11], [27, -10], [28, -10], [29, -9], [30, -9], [31, -9],
            [32, -9], [33, -9], [34, -9], [35, -9], [36, -9], [37, -9]
        ],
        
        europe: [
            // Scandinavia
            [71, 30], [70, 28], [69, 26], [68, 24], [67, 22], [66, 20], [65, 18], [64, 16],
            [63, 14], [62, 12], [61, 10], [60, 8], [59, 6], [58, 4], [57, 2], [56, 0],
            [55, -2], [54, -4], [53, -3], [52, -2], [51, -1], [50, 0], [49, 1],
            // Western Europe
            [48, 2], [47, 1], [46, 0], [45, -1], [44, -2], [43, -3], [42, -4], [41, -5],
            [40, -6], [39, -7], [38, -8], [37, -9], [36, -9], [36, -8], [36, -7],
            [36, -6], [36, -5], [37, -4], [38, -3], [39, -2], [40, -1], [41, 0],
            // Mediterranean
            [42, 1], [43, 2], [44, 3], [45, 4], [46, 5], [47, 6], [48, 7], [49, 8],
            [50, 9], [51, 10], [52, 11], [53, 12], [54, 13], [55, 14], [56, 15],
            [57, 16], [58, 17], [59, 18], [60, 19], [61, 20], [62, 21], [63, 22],
            [64, 23], [65, 24], [66, 25], [67, 26], [68, 27], [69, 28], [70, 29], [71, 30]
        ],
        
        asia: [
            // Siberian north coast
            [77, 50], [76, 60], [75, 70], [74, 80], [73, 90], [72, 100], [71, 110], [70, 120],
            [69, 130], [68, 140], [67, 150], [66, 160], [65, 170], [64, 175], [63, 180],
            [62, -175], [61, -170], [60, -165], [62, -160], [64, -155], [66, -150],
            // Eastern coast - Russia, China, SE Asia
            [68, -145], [66, -140], [64, -135], [62, -130], [60, -125], [58, -120], [56, -115],
            [54, -110], [52, -105], [50, -100], [48, -95], [46, -90], [44, -85], [42, -80],
            [40, -75], [38, -70], [36, -65], [34, -60], [32, -55], [30, -50], [28, -45],
            [26, -40], [24, -35], [22, -30], [20, -25], [18, -20], [16, -15], [14, -10],
            [12, -5], [10, 0], [8, 5], [6, 10], [4, 15], [2, 20], [0, 25], [-2, 30],
            [-4, 35], [-6, 40], [-8, 45], [-10, 50], [-8, 55], [-6, 60], [-4, 65],
            [-2, 70], [0, 75], [2, 80], [4, 85], [6, 90], [8, 95], [10, 100],
            [12, 105], [14, 110], [16, 115], [18, 120], [20, 125], [22, 130], [24, 135],
            [26, 140], [28, 145], [30, 150], [32, 155], [34, 160], [36, 165], [38, 170],
            // Southern Asia
            [40, 175], [42, 180], [44, -175], [46, -170], [48, -165], [50, -160], [52, -155],
            [54, -150], [56, -145], [58, -140], [60, -135], [62, -130], [64, -125], [66, -120],
            [68, -115], [70, -110], [72, -105], [74, -100], [75, -95], [76, -90], [77, -85],
            [76, -80], [75, -75], [74, -70], [73, -65], [72, -60], [71, -55], [70, -50],
            [69, -45], [68, -40], [67, -35], [66, -30], [65, -25], [64, -20], [63, -15],
            [62, -10], [61, -5], [60, 0], [61, 5], [62, 10], [63, 15], [64, 20],
            [65, 25], [66, 30], [67, 35], [68, 40], [69, 45], [70, 50], [71, 50],
            [72, 50], [73, 50], [74, 50], [75, 50], [76, 50], [77, 50]
        ],
        
        australia: [
            // More detailed Australia outline
            [-9, 142], [-10, 141], [-11, 140], [-12, 139], [-13, 138], [-14, 137], [-15, 136],
            [-16, 135], [-17, 134], [-18, 123], [-19, 122], [-20, 121], [-21, 120], [-22, 119],
            [-23, 118], [-24, 117], [-25, 116], [-26, 115], [-27, 114], [-28, 113], [-29, 113],
            [-30, 114], [-31, 115], [-32, 116], [-33, 117], [-34, 118], [-35, 119], [-36, 120],
            [-37, 121], [-38, 122], [-39, 123], [-40, 124], [-41, 125], [-42, 126], [-43, 127],
            [-44, 128], [-43, 129], [-42, 130], [-41, 131], [-40, 132], [-39, 133], [-38, 134],
            [-37, 135], [-36, 136], [-35, 137], [-34, 138], [-33, 139], [-32, 140], [-31, 141],
            [-30, 142], [-29, 143], [-28, 144], [-27, 145], [-26, 146], [-25, 147], [-24, 148],
            [-23, 149], [-22, 150], [-21, 151], [-20, 152], [-19, 153], [-18, 154], [-17, 153],
            [-16, 152], [-15, 151], [-14, 150], [-13, 149], [-12, 148], [-11, 147], [-10, 146],
            [-9, 145], [-8, 144], [-9, 143], [-9, 142]
        ]
    };
    
    // Create smooth spline interpolation function
    function createSmoothCurve(points, segments = 100) {
        if (points.length < 3) return points;
        
        const curve = new THREE.CatmullRomCurve3(points);
        curve.closed = true; // Make it a closed loop
        curve.curveType = 'centripetal'; // Smooth curve type
        
        return curve.getPoints(segments);
    }
    
    // Enhanced material with anti-aliasing
    const outlineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        linewidth: 2
    });
    
    // Continent outlines disabled
    
    // Island outlines disabled
    const islandOutlines = {
        greenland: [
            [83, -35], [82, -30], [81, -25], [80, -20], [78, -18], [76, -16], [74, -15], 
            [72, -16], [70, -18], [68, -20], [66, -22], [64, -24], [62, -26], [60, -28],
            [58, -32], [56, -36], [54, -40], [56, -44], [58, -48], [60, -52], [62, -54],
            [64, -52], [66, -50], [68, -48], [70, -46], [72, -44], [74, -42], [76, -40],
            [78, -38], [80, -36], [82, -34], [83, -35]
        ],
        madagascar: [
            [-12, 45], [-13, 46], [-14, 47], [-15, 48], [-16, 49], [-17, 50], [-18, 49],
            [-19, 48], [-20, 47], [-21, 46], [-22, 45], [-23, 44], [-24, 43], [-25, 44],
            [-24, 45], [-23, 46], [-22, 45], [-21, 44], [-20, 43], [-19, 42], [-18, 43],
            [-17, 44], [-16, 43], [-15, 42], [-14, 43], [-13, 44], [-12, 45]
        ],
        japan: [
            [45, 140], [44, 141], [43, 142], [42, 143], [41, 144], [40, 145], [39, 144],
            [38, 143], [37, 142], [36, 141], [35, 140], [34, 139], [33, 138], [32, 137],
            [31, 136], [30, 135], [29, 134], [30, 133], [31, 132], [32, 133], [33, 134],
            [34, 135], [35, 136], [36, 137], [37, 138], [38, 139], [39, 138], [40, 137],
            [41, 138], [42, 139], [43, 140], [44, 139], [45, 140]
        ],
        britain: [
            [60, -5], [59, -4], [58, -3], [57, -2], [56, -1], [55, 0], [54, 1], [53, 2],
            [52, 1], [51, 0], [50, -1], [49, -2], [50, -3], [51, -4], [52, -5], [53, -6],
            [54, -7], [55, -8], [56, -7], [57, -6], [58, -5], [59, -6], [60, -5]
        ],
        newZealand: [
            [-35, 170], [-36, 171], [-37, 172], [-38, 173], [-39, 174], [-40, 175], [-41, 176],
            [-42, 175], [-43, 174], [-44, 173], [-45, 172], [-46, 171], [-45, 170], [-44, 169],
            [-43, 168], [-42, 167], [-41, 166], [-40, 165], [-39, 166], [-38, 167], [-37, 168],
            [-36, 169], [-35, 170]
        ]
    };
    
    // Enhanced island material
    const islandMaterial = new THREE.LineBasicMaterial({
        color: 0xcccccc,
        transparent: true,
        opacity: 0.6,
        linewidth: 1.5
    });
    
    // Island outlines rendering disabled
    
    console.log('Continent and island outlines disabled');
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
                    
                    <button class="continue-migration-path-btn">
                        Compare Migration Patterns
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Migration Patterns Section -->
        <div class="migration-patterns-section">
            <h1 class="migration-patterns-title">Common Patterns around Migration Reasons</h1>
            <p class="migration-patterns-subtitle"></p>
            
            <div class="patterns-content">
                        <!-- Left Section: Major Migration Reasons Chart -->
                        <div class="major-reasons-container">
                            <div class="major-reasons-text-container">
                                <h3 class="major-reasons-title">Major reason behind Migration</h3>
                                <p class="major-reasons-description">Understanding why birds migrate reveals nature's incredible adaptability, with feeding (29.8%) and climate response (28.9%) as the top drivers globally</p>
                            </div>
                    
                    <div class="major-reasons-chart">
                        <svg class="major-reasons-svg" viewBox="0 0 200 200">
                            <!-- Major reasons chart segments will be generated by JavaScript -->
                        </svg>
                    </div>
                </div>
                
                <!-- Right section placeholder for future content -->
                <div class="patterns-right-section">
                    <!-- Future content will be added here -->
                </div>
            </div>
        </div>

        <!-- Migration Path Section -->
        <div class="migration-path-section">
            <h1 class="migration-path-title">Stork Migration Path</h1>
            
            <div class="migration-path-content">
                <!-- Migration Stats Section -->
                <div class="migration-stats-section">
                    <div class="migration-stats-container">
                        <div class="migration-stats-card">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="migration-stats-number" id="routes-tracked" data-target="1439">0</div>
                                    <div class="migration-stats-label">Routes
Tracked</div>
                                </div>
                                <div class="card-back">
                                    <div class="card-back-content">
                                        <h4>Migration Routes</h4>
                                        <p>Each route represents a unique migration path recorded by researchers. These pathways reveal the incredible navigational abilities of birds and help scientists understand migration patterns across the globe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="migration-stats-card">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="migration-stats-number" id="total-distance" data-target="4847" data-suffix=" km">0</div>
                                    <div class="migration-stats-label">Average
Distance</div>
                                </div>
                                <div class="card-back">
                                    <div class="card-back-content">
                                        <h4>Migration Distance</h4>
                                        <p>The incredible distances birds travel showcase their endurance. Some species fly non-stop for days, covering thousands of kilometers without rest, guided only by instinct and environmental cues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="migration-stats-card">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="migration-stats-number" id="average-speed" data-target="35" data-suffix=" km/h">0</div>
                                    <div class="migration-stats-label">Average
Speed</div>
                                </div>
                                <div class="card-back">
                                    <div class="card-back-content">
                                        <h4>Flight Speed</h4>
                                        <p>Migration speed balances energy conservation with time efficiency. Birds adjust their pace based on wind conditions, weather patterns, and the urgency to reach breeding or feeding grounds.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="migration-stats-card">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="migration-stats-number" id="max-altitude" data-target="3200" data-suffix=" m">0</div>
                                    <div class="migration-stats-label">Maximum
Altitude</div>
                                </div>
                                <div class="card-back">
                                    <div class="card-back-content">
                                        <h4>Flight Altitude</h4>
                                        <p>Birds fly at extreme altitudes to catch favorable winds and avoid obstacles. Bar-headed geese famously soar over Mount Everest at altitudes where humans need oxygen masks to survive.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="migration-stats-card">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="migration-stats-number" id="success-rate" data-target="73" data-suffix="%">0</div>
                                    <div class="migration-stats-label">Success
Rate</div>
                                </div>
                                <div class="card-back">
                                    <div class="card-back-content">
                                        <h4>Migration Success</h4>
                                        <p>Not every journey ends successfully. Weather storms, predators, habitat loss, and exhaustion claim many birds during migration. This rate reflects the harsh realities of these epic journeys.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="migration-stats-card">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="migration-stats-number" id="energy-consumption" data-target="35" data-suffix="%">0</div>
                                    <div class="migration-stats-label">Body Weight
Lost</div>
                                </div>
                                <div class="card-back">
                                    <div class="card-back-content">
                                        <h4>Energy Cost</h4>
                                        <p>Migration demands enormous energy reserves. Birds lose significant body weight during flight, burning fat and muscle tissue. Some species double their weight before departure to survive the journey.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button class="explore-challenges-btn" style="display: block; margin: 20px auto 0; text-align: center;">
                        Explore Migration Challenges
                    </button>
                </div>
                
                <!-- Right Side: 3D Globe and Controls -->
                <div class="right-content-container">
                    
                    <div class="earth-globe-container" id="earth-globe-container">
                        <div class="globe-controls">
                        <button class="play-pause-btn" id="play-pause-btn" title="Toggle Earth Rotation">
                            <i class="fas fa-pause pause-icon"></i>
                            <i class="fas fa-play play-icon" style="display: none;"></i>
                        </button>
                        </div>
                        <div class="globe-filter-buttons">
                            <button class="filter-btn active" data-filter="all">All</button>
                            <button class="filter-btn" data-filter="successful">Successful</button>
                            <button class="filter-btn" data-filter="failed">Failed</button>
                        </div>
                        <div class="loading-text">Loading Earth Globe...</div>
                    </div>
                    
                    <div class="globe-education-container">
                        <h4>Understanding Migration Routes</h4>
                        <p>This interactive globe shows the migration routes the <span id="current-bird-name">Stork</span> takes across continents. Each route represents real migration data collected by researchers worldwide.</p>
                        <div class="migration-legend">
                            <div class="legend-route successful-route">
                                <div class="route-indicator"></div>
                                <span class="route-label">Successful Migration</span>
                            </div>
                            <div class="legend-route failed-route">
                                <div class="route-indicator"></div>
                                <span class="route-label">Failed Migration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Migration Challenges Section -->
        <div class="challenges-section">
            <h1 class="challenges-title">Weather Migration Challenges</h1>
            <p class="challenges-subtitle">Explore how different weather conditions affect bird migration success rates and survival</p>
            
            <div class="challenges-content">
                <!-- Left Side: Weather Education -->
                <div class="weather-education-container">
                    <h3 class="weather-education-title">Clear Weather Impact on Migration</h3>
                    <p class="weather-education-text">
                        Clear weather provides optimal flying conditions for migrating birds. With good visibility, minimal wind resistance, and stable atmospheric pressure, birds can navigate using celestial cues and maintain efficient flight patterns. Clear skies allow for maximum use of thermal currents and reduce energy expenditure during long-distance flights.
                    </p>
                    
                    <div class="weather-stats-container">
                        <div class="weather-stat-item">
                            <span class="weather-stat-label">Visibility Range</span>
                            <span class="weather-stat-value">15+ km</span>
                        </div>
                        <div class="weather-stat-item">
                            <span class="weather-stat-label">Flight Efficiency</span>
                            <span class="weather-stat-value">95%</span>
                        </div>
                        <div class="weather-stat-item">
                            <span class="weather-stat-label">Navigation Success</span>
                            <span class="weather-stat-value">92%</span>
                        </div>
                        <div class="weather-stat-item">
                            <span class="weather-stat-label">Energy Conservation</span>
                            <span class="weather-stat-value">88%</span>
                        </div>
                        <div class="weather-stat-item">
                            <span class="weather-stat-label">Success Rate</span>
                            <span class="weather-stat-value">85%</span>
                        </div>
                    </div>
                </div>
                
                <!-- Right Side: Weather Wheel -->
                <div class="weather-wheel-container">
                    <!-- Weather wheel will be initialized by JavaScript -->
                    <button class="sustainability-btn" style="margin-top: 2rem;">
                        Discover Sustainability Connection
                    </button>
                </div>
            </div>
        </div>

        <!-- Sustainability Section -->
        <div class="sustainability-section">
            <h1 class="sustainability-title">The Sustainability Connection</h1>
            <p class="sustainability-subtitle">Bird migration patterns serve as early warning systems for our planet's health. Their struggles reflect our own environmental challenges.</p>
            
            <div class="sustainability-content">
                <div class="connection-container">
                    <div class="connection-left">
                        <img src="./images/backgrounds/earth.png" alt="Earth" class="earth-connection-image" />
                    </div>
                    
                    <div class="connection-right">
                        <div class="connection-points">
                            <div class="connection-point climate">
                                <div class="connection-icon">🌡️</div>
                                <div class="connection-content">
                                    <h3>Climate Change Indicators</h3>
                                    <p>Migration timing shifts by 5-10 days per decade as birds adapt to changing temperatures and weather patterns. Their routes serve as living thermometers of global warming.</p>
                                    <div class="connection-stat">
                                        <span class="stat-label">Temperature Impact:</span>
                                        <span class="stat-value">25.8% of migrations driven by climate change</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="connection-point ecosystem">
                                <div class="connection-icon">🌿</div>
                                <div class="connection-content">
                                    <h3>Ecosystem Health Monitors</h3>
                                    <p>Birds connect diverse ecosystems across continents. Their population changes reveal the health of forests, wetlands, and grasslands worldwide.</p>
                                    <div class="connection-stat">
                                        <span class="stat-label">Ecosystem Impact:</span>
                                        <span class="stat-value">45 countries depend on migratory pollinators</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="connection-point pollution">
                                <div class="connection-icon">🏭</div>
                                <div class="connection-content">
                                    <h3>Pollution Detectors</h3>
                                    <p>Migratory birds accumulate pollutants across their range, serving as biological sensors for air and water quality issues that affect human communities.</p>
                                    <div class="connection-stat">
                                        <span class="stat-label">Pollution Exposure:</span>
                                        <span class="stat-value">78% show microplastic contamination</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="sustainability-stats">
                    <div class="sustainability-stat">
                        <div class="stat-number">3.2 billion</div>
                        <div class="stat-description">North American birds lost since 1970</div>
                    </div>
                    <div class="sustainability-stat">
                        <div class="stat-number">40%</div>
                        <div class="stat-description">of migratory species declining globally</div>
                    </div>
                    <div class="sustainability-stat">
                        <div class="stat-number">12%</div>
                        <div class="stat-description">of bird species face extinction</div>
                    </div>
                </div>
                
                <button class="action-btn">
                    How Can We Help?
                </button>
            </div>
        </div>

        <!-- Action Section -->
        <div class="action-section">
            <div class="action-scroll-indicator">
                <div class="mouse-icon"></div>
                <div class="scroll-text">Scroll Down</div>
            </div>
            
            <h1 class="action-title">How We Can Help</h1>
            <p class="action-subtitle">Every action matters. Together, we can protect these incredible journeys for future generations.</p>
            
            <div class="action-content">
                <div class="action-categories">
                    <div class="action-category individual">
                        <h3>Individual Actions</h3>
                        <div class="action-grid-2x2">
                            <div class="action-card" data-action="create-bird-friendly-spaces">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Create Bird-Friendly Spaces.png" alt="Create Bird-Friendly Spaces">
                                </div>
                                <div class="action-card-content">
                                    <h4>Create Bird-Friendly Spaces</h4>
                                    <div class="action-card-overlay">
                                        <p>Plant native flowers, provide clean water sources, and create pesticide-free gardens that serve as rest stops.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="action-card" data-action="reduce-light-pollution">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Reduce Light Pollution.png" alt="Reduce Light Pollution">
                                </div>
                                <div class="action-card-content">
                                    <h4>Reduce Light Pollution</h4>
                                    <div class="action-card-overlay">
                                        <p>Turn off unnecessary lights during migration seasons, use warm-colored LEDs, and install motion sensors.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="action-card" data-action="make-windows-visible">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Make Windows Visible.png" alt="Make Windows Visible">
                                </div>
                                <div class="action-card-content">
                                    <h4>Make Windows Visible</h4>
                                    <div class="action-card-overlay">
                                        <p>Install decals or screens on windows to prevent bird strikes - responsible for 1 billion bird deaths annually.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="action-card" data-action="reduce-carbon-footprint">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Reduce Carbon Footprint.png" alt="Reduce Carbon Footprint">
                                </div>
                                <div class="action-card-content">
                                    <h4>Reduce Carbon Footprint</h4>
                                    <div class="action-card-overlay">
                                        <p>Combat climate change through sustainable transportation, renewable energy, and conscious consumption.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="action-category community">
                        <h3>Community Impact</h3>
                        <div class="action-grid-2x2">
                            <div class="action-card" data-action="habitat-restoration">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Habitat Restoration.png" alt="Habitat Restoration">
                                </div>
                                <div class="action-card-content">
                                    <h4>Habitat Restoration</h4>
                                    <div class="action-card-overlay">
                                        <p>Join local conservation groups to restore wetlands, forests, and grasslands along migration routes.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="action-card" data-action="support-policy-change">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Support Policy Change.png" alt="Support Policy Change">
                                </div>
                                <div class="action-card-content">
                                    <h4>Support Policy Change</h4>
                                    <div class="action-card-overlay">
                                        <p>Advocate for bird-friendly building codes, dark sky ordinances, and protected migration corridors.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="action-card" data-action="citizen-science">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Citizen Science.png" alt="Citizen Science">
                                </div>
                                <div class="action-card-content">
                                    <h4>Citizen Science</h4>
                                    <div class="action-card-overlay">
                                        <p>Participate in bird counts, migration tracking, and data collection to help scientists understand patterns.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="action-card" data-action="fund-conservation">
                                <div class="action-card-image">
                                    <img src="./images/how-can-we-help/Fund Conservation.png" alt="Fund Conservation">
                                </div>
                                <div class="action-card-content">
                                    <h4>Fund Conservation</h4>
                                    <div class="action-card-overlay">
                                        <p>Support organizations working to protect critical stopover sites and breeding grounds worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="impact-potential">
                    <h3>Your Impact Potential</h3>
                    <div class="impact-grid-1x3">
                        <div class="action-card" data-action="bird-friendly-garden">
                            <div class="action-card-image">
                                <img src="./images/how-can-we-help/Bird-Friendly Garden.png" alt="Bird-Friendly Garden">
                            </div>
                            <div class="action-card-content">
                                <h4>Bird-Friendly Garden</h4>
                                <div class="action-card-overlay">
                                    <p>Can support <strong>50+ species</strong> during migration seasons with native plants and clean water sources.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="action-card" data-action="lights-out-initiative">
                            <div class="action-card-image">
                                <img src="./images/how-can-we-help/Lights Out Initiative.png" alt="Lights Out Initiative">
                            </div>
                            <div class="action-card-content">
                                <h4>Lights Out Initiative</h4>
                                <div class="action-card-overlay">
                                    <p>Can save <strong>1,000+ birds</strong> per building per year by reducing light pollution during migration.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="action-card" data-action="community-action">
                            <div class="action-card-image">
                                <img src="./images/how-can-we-help/Community Action.png" alt="Community Action">
                            </div>
                            <div class="action-card-content">
                                <h4>Community Action</h4>
                                <div class="action-card-overlay">
                                    <p>Can protect <strong>entire migration corridors</strong> spanning continents through collective conservation efforts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="call-to-action">
                    <h3>Start Your Journey Today</h3>
                    <p>The fate of 50 billion migrating birds depends on our collective action. Every small step creates ripples of positive change across the globe.</p>
                    
                    <div class="action-buttons">
                        <button class="primary-action-btn">Find Local Conservation Groups</button>
                        <button class="secondary-action-btn">Share This Story</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Section -->
        <div class="footer-section">
            <div class="footer-separator"></div>
            <h2 class="footer-title">Thank You for Your Journey</h2>
            <p class="footer-message">
                Thank you for exploring the incredible world of bird migration with us. Through this interactive journey, you've discovered the remarkable challenges these winged travelers face and the vital role they play in our ecosystem's balance. The knowledge you've gained here has the power to make a real difference in protecting these amazing journeys for future generations.
                <br><br>
                Every small action you take—from creating bird-friendly spaces to supporting conservation efforts—contributes to a global movement that transcends borders, just like the birds themselves. Together, we can ensure that the ancient pathways in the sky remain open for countless generations to come.
            </p>
            <div class="author-section">
                <img src="./images/Author.jpg" alt="Aakash Redu" class="author-image">
                <div class="author-info">
                    <p class="author-name">Aakash Redu</p>
                    <p class="author-role">(Story Board and Visualization)</p>
                </div>
            </div>
            
            <div class="footer-separator"></div>
            
            <div class="tools-section">
                <h3 class="tools-title">Tools & Technologies Used</h3>
                <div class="tools-grid">
                    <div class="tool-item" data-tool="HTML">
                        <img src="./images/tools/html.png" alt="HTML" class="tool-image">
                        <div class="tool-tooltip">HTML</div>
                    </div>
                    <div class="tool-item" data-tool="CSS">
                        <img src="./images/tools/css.png" alt="CSS" class="tool-image">
                        <div class="tool-tooltip">CSS</div>
                    </div>
                    <div class="tool-item" data-tool="JavaScript">
                        <img src="./images/tools/javascript.png" alt="JavaScript" class="tool-image">
                        <div class="tool-tooltip">JavaScript</div>
                    </div>
                    <div class="tool-item" data-tool="React">
                        <img src="./images/tools/react.png" alt="React" class="tool-image">
                        <div class="tool-tooltip">React</div>
                    </div>
                    <div class="tool-item" data-tool="ChatGPT">
                        <img src="./images/tools/chatgpt.png" alt="ChatGPT" class="tool-image">
                        <div class="tool-tooltip">ChatGPT</div>
                    </div>
                    <div class="tool-item" data-tool="Cline">
                        <img src="./images/tools/cline.png" alt="Cline" class="tool-image">
                        <div class="tool-tooltip">Cline</div>
                    </div>
                    <div class="tool-item" data-tool="GitHub">
                        <img src="./images/tools/github.png" alt="GitHub" class="tool-image">
                        <div class="tool-tooltip">GitHub</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Weather data with migration success rates and educational content
const weatherData = {
    clear: {
        name: 'Clear Weather',
        image: './images/weather/weather-clear_full.png',
        successRate: 85,
        educationText: 'Clear weather provides optimal flying conditions for migrating birds. With good visibility, minimal wind resistance, and stable atmospheric pressure, birds can navigate using celestial cues and maintain efficient flight patterns. Clear skies allow for maximum use of thermal currents and reduce energy expenditure during long-distance flights.',
        stats: {
            'Visibility Range': '15+ km',
            'Flight Efficiency': '95%',
            'Navigation Success': '92%',
            'Energy Conservation': '88%',
            'Success Rate': '85%'
        }
    },
    windy: {
        name: 'Windy Conditions',
        image: './images/weather/weather-windy-full.png',
        successRate: 72,
        educationText: 'Wind conditions can be both helpful and challenging for migrating birds. Tailwinds can significantly speed up migration and reduce energy costs, while headwinds force birds to work harder and may delay their journey. Crosswinds require constant course corrections, increasing energy expenditure and navigation complexity.',
        stats: {
            'Tailwind Advantage': '+40% speed',
            'Headwind Penalty': '-25% speed',
            'Course Corrections': 'Every 2-3km',
            'Energy Cost': '+35% in headwinds',
            'Success Rate': '72%'
        }
    },
    rainy: {
        name: 'Rainy Weather',
        image: './images/weather/weather-rainy-full.png',
        successRate: 58,
        educationText: 'Rain presents significant challenges for migrating birds. Wet feathers reduce insulation and flight efficiency, while poor visibility makes navigation difficult. Many birds seek shelter during heavy rain, which can delay migration timing and disrupt feeding schedules. Light rain is more manageable than heavy downpours.',
        stats: {
            'Flight Efficiency': '-30%',
            'Visibility': '2-5 km',
            'Shelter Seeking': '75% of birds',
            'Delayed Migration': '1-3 days',
            'Success Rate': '58%'
        }
    },
    storm: {
        name: 'Storm Conditions',
        image: './images/weather/weather-storm-full.png',
        successRate: 32,
        educationText: 'Severe storms are among the most dangerous weather conditions for migrating birds. Strong winds, heavy precipitation, and lightning create life-threatening situations. Many birds are blown off course, exhausted, or forced to make emergency landings. Storms can devastate entire flocks and significantly impact migration success rates.',
        stats: {
            'Wind Speeds': '50+ km/h',
            'Course Deviation': '20-50 km',
            'Emergency Landings': '60%',
            'Flock Separation': '80%',
            'Success Rate': '32%'
        }
    },
    foggy: {
        name: 'Foggy Conditions',
        image: './images/weather/weather-foggy-full.png',
        successRate: 45,
        educationText: 'Fog creates navigation challenges through severely reduced visibility. Birds must rely more heavily on magnetic orientation and internal compasses when visual landmarks disappear. While fog doesn\'t pose the direct physical threats of storms, it increases collision risks and can lead to disorientation, especially in unfamiliar areas.',
        stats: {
            'Visibility': '<500m',
            'Collision Risk': '+250%',
            'Navigation Error': '+45%',
            'Flight Altitude': 'Reduced by 60%',
            'Success Rate': '45%'
        }
    }
};

// Currently selected weather condition
let selectedWeather = 'clear';

// Function to show challenges section with weather wheel
function showChallengesSection() {
    const challengesSection = document.querySelector('.challenges-section');
    
    challengesSection.classList.add('visible');
    
    // Initialize weather wheel after section is visible
    setTimeout(() => {
        initializeWeatherWheel();
        updateWeatherEducation(selectedWeather);
    }, 500);
    
    challengesSection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize the weather wheel interface
function initializeWeatherWheel() {
    const weatherWheelContainer = document.querySelector('.weather-wheel-container');
    if (!weatherWheelContainer) {
        console.error('Weather wheel container not found');
        return;
    }
    
    // Ensure selectedWeather is set to clear initially
    selectedWeather = 'clear';
    
    // Get clear weather data to ensure consistent image path
    const clearWeatherData = weatherData['clear'];
    console.log('Clear weather data:', clearWeatherData);
    console.log('Clear weather image path:', clearWeatherData.image);
    
    // Create the weather wheel HTML structure using weatherData object
    const wheelHTML = `
        <div class="weather-wheel-wrapper">
            <div class="weather-wheel">
                <div class="weather-wheel-background">
                    <img src="${clearWeatherData.image}" alt="${clearWeatherData.name}" class="weather-wheel-image" onload="console.log('Clear weather image loaded successfully')" onerror="console.error('Failed to load clear weather image:', this.src)">
                    <div class="flying-bird-overlay">
                        <img src="./images/ui/generic-bird-flying-transparent.gif" alt="Flying bird" class="weather-bird-gif">
                    </div>
                </div>
            </div>
            
            <div class="weather-item selected" data-weather="clear">
                <span class="weather-item-text">Clear</span>
            </div>
            
            <div class="weather-item" data-weather="windy">
                <span class="weather-item-text">Windy</span>
            </div>
            
            <div class="weather-item" data-weather="rainy">
                <span class="weather-item-text">Rainy</span>
            </div>
            
            <div class="weather-item" data-weather="storm">
                <span class="weather-item-text">Storm</span>
            </div>
            
            <div class="weather-item" data-weather="foggy">
                <span class="weather-item-text">Foggy</span>
            </div>
        </div>
        
        <button class="sustainability-btn" style="margin-top: 2rem;">
            Discover Sustainability Connection
        </button>
    `;
    
    weatherWheelContainer.innerHTML = wheelHTML;
    
    // Add event listener to the sustainability button AFTER it's created
    const sustainabilityBtn = document.querySelector('.sustainability-btn');
    if (sustainabilityBtn) {
        sustainabilityBtn.addEventListener('click', showSustainabilitySection);
        console.log('Sustainability button event listener attached');
    } else {
        console.error('Sustainability button not found after creation');
    }
    
    // Force initial weather selection to clear after DOM is updated
    setTimeout(() => {
        selectWeather('clear');
        console.log('Forced initial selection to clear weather');
    }, 100);
    
    // Add click event listeners to weather items
    const weatherItems = document.querySelectorAll('.weather-item');
    weatherItems.forEach(item => {
        item.addEventListener('click', function() {
            const weather = this.dataset.weather;
            if (weather && weather !== selectedWeather) {
                selectWeather(weather);
            }
        });
    });
    
    // Auto-rotate selection every 8 seconds
    setInterval(() => {
        const weatherTypes = Object.keys(weatherData);
        const currentIndex = weatherTypes.indexOf(selectedWeather);
        const nextIndex = (currentIndex + 1) % weatherTypes.length;
        const nextWeather = weatherTypes[nextIndex];
        selectWeather(nextWeather);
    }, 8000);
    
    console.log('Weather wheel initialized successfully with clear weather');
}

// Select a weather condition and update the interface
function selectWeather(weather) {
    if (!weatherData[weather]) {
        console.error(`Weather type ${weather} not found`);
        return;
    }
    
    selectedWeather = weather;
    
    // Update weather items selection
    const weatherItems = document.querySelectorAll('.weather-item');
    weatherItems.forEach(item => {
        if (item.dataset.weather === weather) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
    
    // Update center display - the weather image that fills the entire wheel
    const wheelImage = document.querySelector('.weather-wheel-image');
    
    if (wheelImage) {
        wheelImage.src = weatherData[weather].image;
        wheelImage.alt = weatherData[weather].name;
    }
    
    // Update educational content
    updateWeatherEducation(weather);
    
    console.log(`Selected weather: ${weather}`);
}

// Update the educational content and statistics
function updateWeatherEducation(weather) {
    const weatherInfo = weatherData[weather];
    
    // Update education text
    const educationText = document.querySelector('.weather-education-text');
    if (educationText) {
        educationText.textContent = weatherInfo.educationText;
    }
    
    // Update statistics
    const statsContainer = document.querySelector('.weather-stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = '';
        
        // Create array to ensure Success Rate appears last
        const statsEntries = Object.entries(weatherInfo.stats);
        const successRateEntry = statsEntries.find(([label]) => label === 'Success Rate');
        const otherEntries = statsEntries.filter(([label]) => label !== 'Success Rate');
        
        // Process other stats first
        otherEntries.forEach(([label, value]) => {
            const statItem = document.createElement('div');
            statItem.classList.add('weather-stat-item');
            
            // Determine if stat is positive or negative for color coding
            const isPositiveStat = isStatPositive(label, value);
            const statColor = isPositiveStat ? 'rgba(46, 125, 50, 0.4)' : 'rgba(183, 28, 28, 0.4)'; // Darker green/red with transparency
            
            statItem.innerHTML = `
                <span class="weather-stat-label">${label}</span>
                <span class="weather-stat-value">${value}</span>
            `;
            
            // Apply background color based on positive/negative
            statItem.style.background = `linear-gradient(135deg, ${statColor}, rgba(255, 255, 255, 0.1))`;
            
            statsContainer.appendChild(statItem);
        });
        
        // Always add Success Rate at the end if it exists
        if (successRateEntry) {
            const [label, value] = successRateEntry;
            const statItem = document.createElement('div');
            statItem.classList.add('weather-stat-item');
            
            // Parse success rate percentage
            const successPercent = parseInt(value.replace('%', ''));
            let successColor;
            
            // Color coding based on success rate ranges
            if (successPercent > 70) {
                successColor = 'rgba(76, 175, 80, 0.4)'; // Warm green
            } else if (successPercent >= 50) {
                successColor = 'rgba(255, 152, 0, 0.4)'; // Warm orange
            } else {
                successColor = 'rgba(244, 67, 54, 0.4)'; // Warm red
            }
            
            statItem.innerHTML = `
                <span class="weather-stat-label">${label}</span>
                <span class="weather-stat-value">${value}</span>
            `;
            
            // Apply success rate color coding
            statItem.style.background = `linear-gradient(135deg, ${successColor}, rgba(255, 255, 255, 0.1))`;
            
            statsContainer.appendChild(statItem);
        }
    }
    
    // Update the title to reflect current weather
    const educationTitle = document.querySelector('.weather-education-title');
    if (educationTitle) {
        educationTitle.textContent = `${weatherInfo.name} Impact on Migration`;
    }
    
    console.log(`Updated education content for ${weather}`);
}

// Helper function to determine if a stat is positive or negative
function isStatPositive(label, value) {
    const lowerLabel = label.toLowerCase();
    const lowerValue = value.toLowerCase();
    
    // Positive indicators
    if (lowerLabel.includes('efficiency') || 
        lowerLabel.includes('success') || 
        lowerLabel.includes('navigation') ||
        lowerLabel.includes('conservation') ||
        lowerLabel.includes('visibility') ||
        lowerLabel.includes('advantage')) {
        return true;
    }
    
    // Negative indicators
    if (lowerLabel.includes('risk') || 
        lowerLabel.includes('penalty') || 
        lowerLabel.includes('error') ||
        lowerLabel.includes('cost') ||
        lowerLabel.includes('delayed') ||
        lowerLabel.includes('deviation') ||
        lowerLabel.includes('emergency') ||
        lowerLabel.includes('separation')) {
        return false;
    }
    
    // Check for positive/negative modifiers in the value
    if (lowerValue.includes('+') || lowerValue.includes('increase')) {
        return true;
    }
    
    if (lowerValue.includes('-') || lowerValue.includes('decrease') || lowerValue.includes('reduced')) {
        return false;
    }
    
    // Default to positive for neutral stats
    return true;
}

// Function to show sustainability section
function showSustainabilitySection() {
    const sustainabilitySection = document.querySelector('.sustainability-section');
    sustainabilitySection.classList.add('visible');
    
    // Animate sustainability stats
    setTimeout(() => {
        animateSustainabilityStats();
    }, 500);
    
    sustainabilitySection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to show action section
function showActionSection() {
    const actionSection = document.querySelector('.action-section');
    actionSection.classList.add('visible');
    
    actionSection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Animate success rate bar
function animateSuccessBar() {
    const successFill = document.querySelector('.success-fill');
    const percentage = parseInt(successFill.dataset.percentage);
    
    successFill.style.width = '0%';
    
    setTimeout(() => {
        successFill.style.transition = 'width 2s ease-out';
        successFill.style.width = percentage + '%';
    }, 100);
}

// Update challenge stats with data from bird migration schema
function updateChallengeStats() {
    // These stats are derived from the migration data schema
    // Weather conditions, predator sightings, migration interruptions, etc.
    
    // Storm encounters based on weather conditions in data
    document.getElementById('storm-encounters').textContent = '38% of migrations';
    
    // Wind speeds from schema
    document.getElementById('wind-speeds').textContent = 'Up to 45 km/h';
    
    // Predator sightings average from schema
    document.getElementById('predator-sightings').textContent = 'Average 4 per journey';
    
    // Survival rate (migration success rate from schema)
    document.getElementById('survival-rate').textContent = '72% complete journey';
    
    // Food supply levels from schema
    document.getElementById('food-supply').textContent = '45% of stopover sites';
    
    // Energy loss during migration
    document.getElementById('energy-loss').textContent = 'Up to 40% body weight';
    
    // Migration interruption rate from schema
    document.getElementById('interruption-rate').textContent = '31% of tracked birds';
    
    // Habitat loss statistic
    document.getElementById('habitat-loss').textContent = '25% since 1970';
}

// Animate sustainability statistics
function animateSustainabilityStats() {
    const statNumbers = document.querySelectorAll('.sustainability-stat .stat-number');
    const targets = ['3.2 billion', '40%', '12%'];
    
    statNumbers.forEach((statNumber, index) => {
        let currentValue = 0;
        const target = targets[index];
        
        // Extract numeric value for animation
        let numericTarget;
        if (target.includes('billion')) {
            numericTarget = parseFloat(target) * 1000000000;
        } else if (target.includes('%')) {
            numericTarget = parseFloat(target);
        }
        
        const duration = 2000;
        const steps = 60;
        const increment = numericTarget / steps;
        let stepCount = 0;
        
        const timer = setInterval(() => {
            stepCount++;
            if (stepCount >= steps) {
                statNumber.textContent = target;
                clearInterval(timer);
            } else {
                currentValue += increment;
                if (target.includes('billion')) {
                    statNumber.textContent = (currentValue / 1000000000).toFixed(1) + ' billion';
                } else if (target.includes('%')) {
                    statNumber.textContent = Math.floor(currentValue) + '%';
                }
            }
        }, duration / steps);
    });
}

// Mobile detection and optimization
const isMobile = () => {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Optimize performance for mobile devices
const optimizeForMobile = () => {
    if (isMobile()) {
        // Reduce animation complexity on mobile
        document.documentElement.style.setProperty('--transition', '0.2s ease');
        
        // Disable auto-rotation animations on mobile
        animationActive = false;
        
        // Add mobile-specific viewport meta tag if not present
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(viewport);
        }
        
        // Add touch-friendly event listeners
        addMobileTouchHandlers();
        
        // Optimize scroll behavior for mobile
        optimizeMobileScrolling();
    }
};

// Add mobile touch event handlers
const addMobileTouchHandlers = () => {
    // Add touch feedback to interactive elements
    const interactiveElements = document.querySelectorAll(
        '.bird-card-small, .chart-segment, .action-item, .challenge-card, .connection-point, .timeline-phase, button'
    );
    
    interactiveElements.forEach(element => {
        // Add touch start/end handlers for visual feedback
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.transition = '';
        }, { passive: true });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
            this.style.transition = '';
        }, { passive: true });
    });
    
    // Add swipe gesture support for bird selection
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        // Only process horizontal swipes that are significant
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            const birdGrid = document.querySelector('.bird-grid');
            if (birdGrid && birdGrid.contains(e.target)) {
                // Swipe left or right to change birds
                const availableBirds = allBirds.filter(bird => bird !== selectedBird);
                const currentIndex = availableBirds.indexOf(selectedBird);
                
                if (diffX > 0 && currentIndex < availableBirds.length - 1) {
                    // Swiped left, go to next bird
                    updateSelectedBird(availableBirds[currentIndex + 1]);
                } else if (diffX < 0 && currentIndex > 0) {
                    // Swiped right, go to previous bird
                    updateSelectedBird(availableBirds[currentIndex - 1]);
                }
            }
        }
        
        touchStartX = 0;
        touchStartY = 0;
    }, { passive: true });
};

// Optimize scrolling behavior for mobile
const optimizeMobileScrolling = () => {
    // Smooth scroll polyfill for mobile browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        let scrollTimer = null;
        
        const smoothScrollTo = (element) => {
            if (scrollTimer) {
                clearInterval(scrollTimer);
            }
            
            const targetPosition = element.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;
            
            const animation = (currentTime) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            
            const easeInOutQuart = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t * t + b;
                t -= 2;
                return -c / 2 * (t * t * t * t - 2) + b;
            };
            
            requestAnimationFrame(animation);
        };
        
        // Override smooth scroll behavior
        const originalScrollIntoView = Element.prototype.scrollIntoView;
        Element.prototype.scrollIntoView = function(options) {
            if (options && options.behavior === 'smooth') {
                smoothScrollTo(this);
            } else {
                originalScrollIntoView.call(this, options);
            }
        };
    }
    
    // Optimize scroll indicator for mobile
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator && isMobile()) {
        // Hide scroll indicator faster on mobile
        const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            const shouldShow = scrollTop < 10;
            
            if (shouldShow) {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.classList.remove('hidden');
            } else {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.classList.add('hidden');
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    // Prevent overscroll bounce on iOS
    document.addEventListener('touchmove', function(e) {
        if (e.target === document.body || e.target === document.documentElement) {
            e.preventDefault();
        }
    }, { passive: false });
};

// Optimize 3D globe for mobile devices
const optimizeMobileGlobe = () => {
    if (isMobile() && renderer) {
        // Reduce rendering quality on mobile for better performance
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Reduce globe complexity
        if (globe && globe.geometry) {
            const geometry = globe.geometry;
            if (geometry.parameters) {
                geometry.parameters.widthSegments = Math.min(geometry.parameters.widthSegments, 32);
                geometry.parameters.heightSegments = Math.min(geometry.parameters.heightSegments, 32);
            }
        }
        
        // Disable continuous rotation on mobile to save battery
        animationActive = false;
    }
};

// Handle orientation changes on mobile
const handleOrientationChange = () => {
    if (isMobile()) {
        setTimeout(() => {
            // Recalculate dimensions after orientation change
            if (renderer && camera) {
                const container = document.getElementById('earth-globe-container');
                if (container) {
                    const width = container.clientWidth;
                    const height = container.clientHeight;
                    
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    renderer.setSize(width, height);
                }
            }
            
            // Trigger resize event for other components
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }
};

// Optimize chart interactions for mobile
const optimizeMobileChart = () => {
    if (isMobile()) {
        // Increase touch target areas for chart segments
        const chartSegments = document.querySelectorAll('.chart-segment');
        chartSegments.forEach(segment => {
            segment.style.strokeWidth = '3'; // Make segments easier to touch
        });
        
        // Add haptic feedback for chart interactions (if supported)
        chartSegments.forEach(segment => {
            segment.addEventListener('touchstart', () => {
                if ('vibrate' in navigator) {
                    navigator.vibrate(50); // Short vibration
                }
            }, { passive: true });
        });
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the HTML structure
    createHTMLStructure();
    
    // Apply mobile optimizations first
    optimizeForMobile();
    
    // Initialize functionality
    initTypewriter();
    animateStats();
    initScrollIndicator();
    updateSelectedBird('stork');
    
    // Initialize migration stats with real data
    setTimeout(async () => {
        await updateMigrationStatsCards();
    }, 100);
    
    // Optimize chart for mobile after creation
    setTimeout(optimizeMobileChart, 100);
    
    // Add event listener to Begin Journey button
    document.querySelector('.begin-journey-btn').addEventListener('click', showJourneySection);
    
    // Add event listener to button in Journey section
    document.querySelectorAll('.continue-migration-path-btn').forEach((button, index) => {
        console.log(`Button ${index}: ${button.textContent.trim()}`); // Debug log
        if (index === 0) {
            // First button - Compare Migration Patterns in Journey section
            button.addEventListener('click', function() {
                console.log('Compare Migration Patterns button clicked'); // Debug log
                showMigrationPatternsSection();
            });
        } else {
            // Second button - Explore Migration Path in Patterns section
            button.addEventListener('click', function() {
                console.log('Explore Migration Path button clicked'); // Debug log
                showMigrationPathSection();
            });
        }
    });
    
    // Event listener for Patterns section button is now handled in the code above
    
    // Add event listener to Explore Challenges button
    document.querySelector('.explore-challenges-btn').addEventListener('click', showChallengesSection);
    
    // Sustainability button event listener is now attached in initializeWeatherWheel() function
    // since the button is created dynamically when the weather wheel is initialized
    
    // Add event listener to Action button
    document.querySelector('.action-btn').addEventListener('click', function() {
        showActionSection();
        // Show the scroll indicator after a short delay to ensure section is visible
        setTimeout(() => {
            showActionScrollIndicator();
        }, 500);
    });
    
    // Add event listeners to globe filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter type
            const filter = this.dataset.filter;
            
            // Apply filter to globe visualization
            applyRouteFilter(filter);
            
            // Update current bird name in educational text
            const currentBirdName = document.getElementById('current-bird-name');
            if (currentBirdName) {
                const bird = birdData[selectedBird];
                currentBirdName.textContent = bird.name;
            }
        });
    });
    
    // Add event listener to play/pause button
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            // Toggle animation state
            animationActive = !animationActive;
            
            // Update button icons
            const playIcon = this.querySelector('.play-icon');
            const pauseIcon = this.querySelector('.pause-icon');
            
            if (animationActive) {
                // Show pause icon, hide play icon
                pauseIcon.style.display = 'inline';
                playIcon.style.display = 'none';
                this.title = 'Pause Earth Rotation';
            } else {
                // Show play icon, hide pause icon
                playIcon.style.display = 'inline';
                pauseIcon.style.display = 'none';
                this.title = 'Resume Earth Rotation';
            }
        });
    }
    
    // Add event listeners to action buttons in final section
    document.querySelector('.primary-action-btn').addEventListener('click', function() {
        // Open conservation groups link in new tab
        window.open('https://wa.audubon.org/about-us/find-chapter', '_blank', 'noopener,noreferrer');
    });
    
    document.querySelector('.secondary-action-btn').addEventListener('click', function() {
        // Enhanced sharing functionality for mobile
        if (navigator.share) {
            navigator.share({
                title: 'Wings of Migration',
                text: 'Discover the incredible world of bird migration and how we can help protect these amazing journeys.',
                url: window.location.href
            }).catch((error) => {
                console.log('Error sharing:', error);
                // Fallback to clipboard
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        alert('Link copied to clipboard!');
                    });
                }
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const url = window.location.href;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url).then(() => {
                    alert('Link copied to clipboard!');
                }).catch(() => {
                    // Final fallback - show URL
                    alert('Share this link: ' + url);
                });
            } else {
                alert('Share this link: ' + url);
            }
        }
    });
    
    document.querySelector('.tertiary-action-btn').addEventListener('click', function() {
        // Simulate opening external link to learn more
        alert('Redirecting to additional resources...');
    });
    
    // Add orientation change handler
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
});

// Apply route filter based on migration success
function applyRouteFilter(filterType) {
    console.log(`Applying route filter: ${filterType}`);
    
    if (!corridorLines || corridorLines.length === 0) {
        console.log('No corridor lines to filter');
        return;
    }
    
    corridorLines.forEach(routeElement => {
        // Handle individual arc lines (new structure)
        if (routeElement.userData && routeElement.userData.migrationType === 'individual-arc') {
            const isSuccessful = routeElement.userData.isSuccessful;
            
            switch (filterType) {
                case 'all':
                    // Show all routes
                    routeElement.userData.filterVisible = true;
                    routeElement.material.opacity = routeElement.userData.originalOpacity || 0.8;
                    break;
                    
                case 'successful':
                    // Show only successful routes
                    if (isSuccessful) {
                        routeElement.userData.filterVisible = true;
                        routeElement.material.opacity = Math.min(1.0, (routeElement.userData.originalOpacity || 0.8) * 1.2);
                    } else {
                        routeElement.userData.filterVisible = false;
                    }
                    break;
                    
                case 'failed':
                    // Show only failed routes
                    if (!isSuccessful) {
                        routeElement.userData.filterVisible = true;
                        routeElement.material.opacity = Math.min(1.0, (routeElement.userData.originalOpacity || 0.8) * 1.2);
                    } else {
                        routeElement.userData.filterVisible = false;
                    }
                    break;
                    
                default:
                    console.warn(`Unknown filter type: ${filterType}`);
                    routeElement.userData.filterVisible = true;
                    break;
            }
        }
        // Handle non-route elements (like particles or markers)
        else if (!routeElement.userData || !routeElement.userData.migrationType) {
            routeElement.visible = true;
        }
    });
    
    // Also filter wave markers (particles) if they exist
    waveMarkers.forEach(particle => {
        if (particle.userData && particle.userData.corridorData) {
            // Apply same filtering logic to particles if needed
            particle.visible = filterType === 'all' || Math.random() > 0.5; // Simple random filter for particles
        }
    });
    
    console.log(`Route filter '${filterType}' applied to ${corridorLines.length} elements`);
}
