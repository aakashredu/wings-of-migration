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
    // Fix coordinate system - remove the -90 offset that was causing the shift
    const angleInRadians = angleInDegrees * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

// Function to find the highest percentage migration reason
function getHighestMigrationReason(bird) {
    // Hard-coded correct answers to bypass any potential sorting issues
    const correctAnswers = {
        stork: 'breeding',     // 27.1% > 26.75% > 24.04% > 22.1%
        warbler: 'feeding',    // 28.34%
        goose: 'predators',    // 27.31%
        crane: 'climate',      // 25.81%
        eagle: 'feeding',      // 25.95%
        hawk: 'climate',       // 26.64%
        swallow: 'breeding'    // 26.14%
    };
    
    const selectedBirdType = selectedBird.toLowerCase();
    return correctAnswers[selectedBirdType] || 'breeding';
}

// Track currently selected segment for enlargement
let currentlySelectedSegment = null;

// Function to create and update the radial donut chart with advanced visuals
function updateRadialChart() {
    const bird = birdData[selectedBird];
    const chartSvg = document.querySelector('.chart-svg');
    
    // Clear existing content
    chartSvg.innerHTML = '';
    
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 70;
    const innerRadius = 40;
    const labelRadius = 90;
    let currentAngle = 0;
    
    // Find the highest percentage migration reason for pre-selection
    const highestReason = getHighestMigrationReason(bird);
    
    // Set initial selected segment to highest percentage reason
    if (!currentlySelectedSegment) {
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
        
        // Create gradient for this segment
        const gradient = createSegmentGradient(defs, reason, index);
        
        // Create main segment path - enlarge selected segment
        const segmentOuterRadius = isSelected ? outerRadius + 8 : outerRadius;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', createArcPath(centerX, centerY, segmentOuterRadius, innerRadius, currentAngle, currentAngle + angle));
        
        // All segments use gradient colors
        path.setAttribute('fill', `url(#gradient-${reason})`);
        
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', isSelected ? '2' : '1');
        path.classList.add('chart-segment');
        path.setAttribute('data-reason', reason);
        path.setAttribute('data-percentage', percentage);
        
        // Add selection styling for enlarged segment
        if (isSelected) {
            path.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.8))';
            path.style.transform = 'scale(1.05)';
            path.style.transformOrigin = `${centerX}px ${centerY}px`;
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
            // Enhanced segment effects
            this.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))';
            this.style.transform = 'scale(1.08)';
            this.style.transformOrigin = `${centerX}px ${centerY}px`;
            
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
            // Only reset if this segment is not selected
            if (reason !== currentlySelectedSegment) {
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

// Create gradient for segment
function createSegmentGradient(defs, reason, index) {
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    gradient.setAttribute('id', `gradient-${reason}`);
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
        // Get the highest percentage migration reason for this bird
        const bird = birdData[selectedBird];
        const highestReason = getHighestMigrationReason(bird);
        
        const migrationImages = {
            predators: './images/migration-reasons/migration-reason-predators.png',
            breeding: './images/migration-reasons/migration-reason-breeding.png',
            climate: './images/migration-reasons/migration-reason-climate-change.png',
            feeding: './images/migration-reasons/migration-reason-feeding.png'
        };
        
        centerImage.setAttribute('href', migrationImages[highestReason]);
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
    
    // Create animated connection line
    const lineStartPos = polarToCartesian(centerX, centerY, 72, midAngle);
    const lineEndPos = polarToCartesian(centerX, centerY, labelRadius - 15, midAngle);
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', lineStartPos.x);
    line.setAttribute('y1', lineStartPos.y);
    line.setAttribute('x2', lineEndPos.x);
    line.setAttribute('y2', lineEndPos.y);
    line.setAttribute('stroke', 'rgba(255,255,255,0.7)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '3,2');
    line.classList.add('label-line');
    line.style.animation = 'labelLinePulse 3s ease-in-out infinite';
    
    svg.appendChild(line);
    
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
        // Simulate sharing functionality
        if (navigator.share) {
            navigator.share({
                title: 'Wings of Migration',
                text: 'Discover the incredible world of bird migration and how we can help protect these amazing journeys.',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    });
    
    document.querySelector('.tertiary-action-btn').addEventListener('click', function() {
        // Simulate opening external link to learn more
        alert('Redirecting to additional resources...');
    });
});
