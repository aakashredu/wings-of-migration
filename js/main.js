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

// Enhanced Stork Migration Variables
let storkProcessor = null;
let storkData = null;
let migrationCorridors = [];
let migrationWaves = [];
let currentSeason = 'spring';
let currentWaveIndex = 0;
let waveAnimationActive = false;
let densityHeatMap = [];
let corridorLines = [];
let waveMarkers = [];

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
    
    // Add continent outlines on top of the earth texture
    addContinentOutlines();
    
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

// Add enhanced stork migration visualization
async function addMigrationPath() {
    // Check if we're showing stork - if so, use enhanced visualization
    if (selectedBird === 'stork') {
        await initializeStorkVisualization();
        return;
    }
    
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
    globe.add(migrationPath);
    
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

// Initialize enhanced stork migration visualization
async function initializeStorkVisualization() {
    console.log('Initializing enhanced stork migration visualization...');
    
    // Initialize stork processor if not already done
    if (!storkProcessor) {
        storkProcessor = new StorkMigrationProcessor();
        storkData = await storkProcessor.processStorkData();
        migrationCorridors = storkData.corridors;
        migrationWaves = storkData.waves;
    }
    
    // Clear existing migration elements
    clearExistingMigrationElements();
    
    // Add migration corridors (density heat map)
    addMigrationCorridors();
    
    // Add UI controls for wave animation
    addWaveControls();
    
    // Update stats display
    updateStorkStats();
    
    console.log(`Loaded ${storkData.totalRecords} stork migration records`);
    console.log(`Created ${migrationCorridors.length} migration corridors`);
    console.log(`Prepared ${migrationWaves.length} seasonal waves`);
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
    migrationCorridors.forEach((corridor, index) => {
        const startPos = latLngTo3D(corridor.startPoint.lat, corridor.startPoint.lng, 1.02);
        const endPos = latLngTo3D(corridor.endPoint.lat, corridor.endPoint.lng, 1.02);
        
        // Create curved path for corridor
        const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
        midPoint.normalize().multiplyScalar(1.3 + (corridor.frequency / 100)); // Height based on frequency
        
        const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
        const points = curve.getPoints(50);
        
        // Use TubeGeometry for more visible, animated lines instead of LineGeometry
        const tubeRadius = Math.max(0.003, Math.min(0.012, corridor.thickness * 0.002));
        const tubeSegments = 64;
        const tubeRadialSegments = 8;
        const tubeClosed = false;
        
        const tubeGeometry = new THREE.TubeGeometry(
            curve,
            tubeSegments,
            tubeRadius,
            tubeRadialSegments,
            tubeClosed
        );
        
        // Color intensity based on frequency
        const intensity = Math.min(1, corridor.frequency / 50);
        const baseColor = new THREE.Color().setHSL(0.6 - (intensity * 0.3), 0.8, 0.3 + (intensity * 0.4));
        
        // Create animated shader material for migration paths
        const tubeMaterial = new THREE.MeshPhongMaterial({ 
            color: baseColor,
            transparent: true,
            opacity: 0.8 + (intensity * 0.2),
            emissive: baseColor,
            emissiveIntensity: 0.4 + (intensity * 0.3),
            shininess: 80
        });
        
        const corridorLine = new THREE.Mesh(tubeGeometry, tubeMaterial);
        corridorLine.userData = { 
            migrationType: 'corridor', 
            corridorData: corridor,
            originalOpacity: tubeMaterial.opacity,
            curve: curve,
            startPoint: startPos.clone(),
            endPoint: endPos.clone(),
            animationStarted: false
        };
        
        globe.add(corridorLine);
        corridorLines.push(corridorLine);
        
        // Don't add any markers, as requested to remove dots
        // Instead, create animated particles that flow along the path
        createMigrationFlowParticles(corridor, curve, baseColor, index);
    });
    
    // Start the migration flow animation after a small delay
    setTimeout(() => {
        animateMigrationFlows();
    }, 500);
    
    console.log(`Added ${corridorLines.length} enhanced migration corridors to globe`);
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
                opacity: 0.9,
                emissive: particleColor,
                emissiveIntensity: 0.8
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
    midPoint.normalize().multiplyScalar(1.4); // Arc height
    
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

// Update stork statistics display
function updateStorkStats() {
    const stats = storkProcessor.getStatistics();
    
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

// Animate the glow effect on corridor lines
function animateCorridorGlow() {
    const time = Date.now() * 0.001; // Current time in seconds
    
    corridorLines.forEach(line => {
        // Skip non-mesh objects or lights
        if (line.isLight || !line.material) return;
        
        if (line.material.emissiveIntensity !== undefined) {
            // Create a subtle pulsing glow effect
            const pulseValue = 0.3 + (Math.sin(time + Math.random()) * 0.2);
            line.material.emissiveIntensity = pulseValue;
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
                <!-- Left Side: Migration Journey Timeline -->
                <div class="left-content-container">
                    <div class="timeline-container">
                        <h3 class="timeline-title">Migration Journey Phases</h3>
                        <div class="timeline-content">
                            <div class="migration-phases">
                                <div class="phase-item preparation-phase" data-phase="0">
                                    <div class="phase-indicator">
                                        <div class="phase-dot"></div>
                                        <div class="phase-line"></div>
                                    </div>
                                    <div class="phase-content">
                                        <h4>Preparation Phase</h4>
                                        <p>Fat storage, flock gathering</p>
                                        <div class="phase-details">
                                            <span class="detail-item">🍃 Body weight: +25%</span>
                                            <span class="detail-item">👥 Flock formation</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="phase-item departure-phase" data-phase="1">
                                    <div class="phase-indicator">
                                        <div class="phase-dot"></div>
                                        <div class="phase-line"></div>
                                    </div>
                                    <div class="phase-content">
                                        <h4>Departure Phase</h4>
                                        <p>Initial launch, orientation</p>
                                        <div class="phase-details">
                                            <span class="detail-item">🧭 Route orientation</span>
                                            <span class="detail-item">🌅 Dawn departure</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="phase-item active-migration-phase" data-phase="50">
                                    <div class="phase-indicator">
                                        <div class="phase-dot"></div>
                                        <div class="phase-line"></div>
                                    </div>
                                    <div class="phase-content">
                                        <h4>Active Migration</h4>
                                        <p>Long-distance flight</p>
                                        <div class="phase-details">
                                            <span class="detail-item">✈️ 8-12 hours/day</span>
                                            <span class="detail-item">⚡ High energy burn</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="phase-item stopover-phase" data-phase="75">
                                    <div class="phase-indicator">
                                        <div class="phase-dot"></div>
                                        <div class="phase-line"></div>
                                    </div>
                                    <div class="phase-content">
                                        <h4>Stopover Phase</h4>
                                        <p>Rest and refuel</p>
                                        <div class="phase-details">
                                            <span class="detail-item">🍽️ Energy restoration</span>
                                            <span class="detail-item">😴 Rest periods</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="phase-item arrival-phase" data-phase="100">
                                    <div class="phase-indicator">
                                        <div class="phase-dot"></div>
                                    </div>
                                    <div class="phase-content">
                                        <h4>Arrival Phase</h4>
                                        <p>Territory establishment</p>
                                        <div class="phase-details">
                                            <span class="detail-item">🏠 Territory setup</span>
                                            <span class="detail-item">💪 Recovery time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="energy-tracker">
                                <h4>Physical Journey Status</h4>
                                <div class="energy-stats">
                                    <div class="energy-stat">
                                        <div class="stat-icon">⚡</div>
                                        <div class="stat-content">
                                            <span class="stat-label">Energy Reserves</span>
                                            <div class="energy-bar">
                                                <div class="energy-fill" id="energy-reserves"></div>
                                            </div>
                                            <span class="stat-value" id="energy-percentage">100%</span>
                                        </div>
                                    </div>
                                    
                                    <div class="energy-stat">
                                        <div class="stat-icon">🔥</div>
                                        <div class="stat-content">
                                            <span class="stat-label">Calories Burned</span>
                                            <span class="stat-value" id="calories-burned">0 kcal</span>
                                        </div>
                                    </div>
                                    
                                    <div class="energy-stat">
                                        <div class="stat-icon">⏱️</div>
                                        <div class="stat-content">
                                            <span class="stat-label">Flight Hours Today</span>
                                            <span class="stat-value" id="flight-hours">0h</span>
                                        </div>
                                    </div>
                                    
                                    <div class="energy-stat">
                                        <div class="stat-icon">😴</div>
                                        <div class="stat-content">
                                            <span class="stat-label">Rest Needed</span>
                                            <span class="stat-value" id="rest-needed">None</span>
                                        </div>
                                    </div>
                                    
                                    <div class="energy-stat">
                                        <div class="stat-icon">⚖️</div>
                                        <div class="stat-content">
                                            <span class="stat-label">Body Weight</span>
                                            <div class="weight-bar">
                                                <div class="weight-fill" id="body-weight"></div>
                                            </div>
                                            <span class="stat-value" id="weight-percentage">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Side: 3D Globe and Controls -->
                <div class="right-content-container">
                    
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
                        
                        <button class="explore-challenges-btn">
                            Explore Migration Challenges
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Migration Challenges Section -->
        <div class="challenges-section">
            <h1 class="challenges-title">Migration Challenges</h1>
            <p class="challenges-subtitle">The journey is perilous. Every migration is a test of survival against nature's harshest elements.</p>
            
            <div class="challenges-content">
                <div class="challenges-grid">
                    <div class="challenge-card weather-card">
                        <div class="challenge-icon">
                            <img src="./images/weather/weather-storm.png" alt="Extreme Weather" />
                        </div>
                        <h3>Extreme Weather</h3>
                        <div class="challenge-stats">
                            <div class="stat-item">
                                <span class="stat-label">Storm Encounters:</span>
                                <span class="stat-value" id="storm-encounters">38% of migrations</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">High Wind Speeds:</span>
                                <span class="stat-value" id="wind-speeds">Up to 45 km/h</span>
                            </div>
                        </div>
                        <p class="challenge-description">Birds face devastating storms, extreme temperatures, and unpredictable weather patterns that can force them off course or exhaust their energy reserves.</p>
                    </div>
                    
                    <div class="challenge-card predator-card">
                        <div class="challenge-icon">
                            <img src="./images/migration-reasons/migration-reason-predators.png" alt="Predators" />
                        </div>
                        <h3>Predators & Dangers</h3>
                        <div class="challenge-stats">
                            <div class="stat-item">
                                <span class="stat-label">Predator Sightings:</span>
                                <span class="stat-value" id="predator-sightings">Average 4 per journey</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Survival Rate:</span>
                                <span class="stat-value" id="survival-rate">72% complete journey</span>
                            </div>
                        </div>
                        <p class="challenge-description">From aerial predators to ground-based threats at rest stops, migrating birds must constantly remain vigilant while already exhausted from long flights.</p>
                    </div>
                    
                    <div class="challenge-card food-card">
                        <div class="challenge-icon">
                            <img src="./images/migration-reasons/migration-reason-feeding.png" alt="Food Scarcity" />
                        </div>
                        <h3>Food & Energy Crisis</h3>
                        <div class="challenge-stats">
                            <div class="stat-item">
                                <span class="stat-label">Low Food Supply:</span>
                                <span class="stat-value" id="food-supply">45% of stopover sites</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Energy Depletion:</span>
                                <span class="stat-value" id="energy-loss">Up to 40% body weight</span>
                            </div>
                        </div>
                        <p class="challenge-description">Critical stopover sites may lack sufficient food resources, forcing birds to continue flying on empty reserves or face starvation.</p>
                    </div>
                    
                    <div class="challenge-card human-card">
                        <div class="challenge-icon">
                            <img src="./images/backgrounds/earth-non-sustainable.png" alt="Human Impact" />
                        </div>
                        <h3>Human-Made Obstacles</h3>
                        <div class="challenge-stats">
                            <div class="stat-item">
                                <span class="stat-label">Migration Interrupted:</span>
                                <span class="stat-value" id="interruption-rate">31% of tracked birds</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Habitat Loss:</span>
                                <span class="stat-value" id="habitat-loss">25% since 1970</span>
                            </div>
                        </div>
                        <p class="challenge-description">Urban development, light pollution, wind turbines, and habitat destruction create deadly obstacles along ancient migration routes.</p>
                    </div>
                </div>
                
                <div class="challenges-impact">
                    <div class="impact-visualization">
                        <h3>Migration Success Rate</h3>
                        <div class="success-rate-container">
                            <div class="success-bar">
                                <div class="success-fill" data-percentage="72"></div>
                                <span class="success-percentage">72%</span>
                            </div>
                            <p class="success-text">Only 72% of migrating birds successfully complete their journey</p>
                        </div>
                    </div>
                    
                    <button class="sustainability-btn">
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
            <h1 class="action-title">How We Can Help</h1>
            <p class="action-subtitle">Every action matters. Together, we can protect these incredible journeys for future generations.</p>
            
            <div class="action-content">
                <div class="action-categories">
                    <div class="action-category individual">
                        <h3>Individual Actions</h3>
                        <div class="action-grid">
                            <div class="action-item">
                                <div class="action-icon">🏠</div>
                                <div class="action-text">
                                    <h4>Create Bird-Friendly Spaces</h4>
                                    <p>Plant native flowers, provide clean water sources, and create pesticide-free gardens that serve as rest stops.</p>
                                </div>
                            </div>
                            
                            <div class="action-item">
                                <div class="action-icon">💡</div>
                                <div class="action-text">
                                    <h4>Reduce Light Pollution</h4>
                                    <p>Turn off unnecessary lights during migration seasons, use warm-colored LEDs, and install motion sensors.</p>
                                </div>
                            </div>
                            
                            <div class="action-item">
                                <div class="action-icon">🪟</div>
                                <div class="action-text">
                                    <h4>Make Windows Visible</h4>
                                    <p>Install decals or screens on windows to prevent bird strikes - responsible for 1 billion bird deaths annually.</p>
                                </div>
                            </div>
                            
                            <div class="action-item">
                                <div class="action-icon">♻️</div>
                                <div class="action-text">
                                    <h4>Reduce Carbon Footprint</h4>
                                    <p>Combat climate change through sustainable transportation, renewable energy, and conscious consumption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="action-category community">
                        <h3>Community Impact</h3>
                        <div class="action-grid">
                            <div class="action-item">
                                <div class="action-icon">🌳</div>
                                <div class="action-text">
                                    <h4>Habitat Restoration</h4>
                                    <p>Join local conservation groups to restore wetlands, forests, and grasslands along migration routes.</p>
                                </div>
                            </div>
                            
                            <div class="action-item">
                                <div class="action-icon">🏛️</div>
                                <div class="action-text">
                                    <h4>Support Policy Change</h4>
                                    <p>Advocate for bird-friendly building codes, dark sky ordinances, and protected migration corridors.</p>
                                </div>
                            </div>
                            
                            <div class="action-item">
                                <div class="action-icon">🔬</div>
                                <div class="action-text">
                                    <h4>Citizen Science</h4>
                                    <p>Participate in bird counts, migration tracking, and data collection to help scientists understand patterns.</p>
                                </div>
                            </div>
                            
                            <div class="action-item">
                                <div class="action-icon">💰</div>
                                <div class="action-text">
                                    <h4>Fund Conservation</h4>
                                    <p>Support organizations working to protect critical stopover sites and breeding grounds worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="impact-potential">
                    <h3>Your Impact Potential</h3>
                    <div class="impact-calculator">
                        <div class="calculator-item">
                            <div class="calculator-icon">🏠</div>
                            <div class="calculator-content">
                                <h4>Bird-Friendly Garden</h4>
                                <p>Can support <strong>50+ species</strong> during migration seasons</p>
                            </div>
                        </div>
                        
                        <div class="calculator-item">
                            <div class="calculator-icon">💡</div>
                            <div class="calculator-content">
                                <h4>Lights Out Initiative</h4>
                                <p>Can save <strong>1,000+ birds</strong> per building per year</p>
                            </div>
                        </div>
                        
                        <div class="calculator-item">
                            <div class="calculator-icon">🌍</div>
                            <div class="calculator-content">
                                <h4>Community Action</h4>
                                <p>Can protect <strong>entire migration corridors</strong> spanning continents</p>
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
                        <button class="tertiary-action-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to show challenges section
function showChallengesSection() {
    const challengesSection = document.querySelector('.challenges-section');
    challengesSection.classList.add('visible');
    
    // Animate the success rate bar
    setTimeout(() => {
        animateSuccessBar();
    }, 500);
    
    // Update challenge stats with real data from selected bird
    updateChallengeStats();
    
    challengesSection.scrollIntoView({
        behavior: 'smooth'
    });
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
    
    // Add event listener to Sustainability button
    document.querySelector('.sustainability-btn').addEventListener('click', showSustainabilitySection);
    
    // Add event listener to Action button
    document.querySelector('.action-btn').addEventListener('click', showActionSection);
    
    // Add event listeners to action buttons in final section
    document.querySelector('.primary-action-btn').addEventListener('click', function() {
        // Simulate opening external link to conservation groups
        alert('Redirecting to local conservation groups...');
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
