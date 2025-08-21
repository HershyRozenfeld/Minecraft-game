# 🎮 Minecraft 2D Game

**A browser-based 2D implementation of Minecraft with Hebrew interface and modern glassmorphism design**

![Game Preview](assert/images/mainlogo.png)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Team](#team)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Gameplay](#gameplay)
- [Technical Details](#technical-details)
- [Browser Compatibility](#browser-compatibility)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

---

## 🌟 Overview

This project is a 2D web-based interpretation of the popular game Minecraft, developed as a collaborative effort by a team of developers. The game features a simplified but engaging building and exploration experience with a modern, responsive interface designed with Hebrew language support.

The game implements core Minecraft mechanics including:
- **Resource gathering** with specialized tools
- **Building system** with various block types
- **Inventory management** for collected resources
- **Tool-based interaction** system
- **Layered world generation** with different terrain types

---

## ✨ Features

### 🎯 Core Gameplay
- **2D Grid-based World**: 99x30 grid providing extensive building space
- **Resource Collection**: Gather wood, stone, dirt, leaves, and more
- **Building System**: Place and remove blocks to create structures
- **Tool System**: Different tools for different materials (axe, shovel, pickaxe, scissors)
- **Inventory Management**: Visual inventory system with real-time updates

### 🎨 Interface Design
- **Glassmorphism UI**: Modern glass-effect panels with backdrop blur
- **Responsive Design**: Adapts to different screen sizes
- **Hebrew Interface**: Full RTL support with Hebrew text
- **Interactive Help System**: Comprehensive in-game tutorial modal
- **Audio Integration**: Background music with mute/unmute controls
- **Fullscreen Support**: Toggle fullscreen mode for immersive experience

### 🛠️ Technical Features
- **Pure HTML/CSS/JavaScript**: No external frameworks required
- **CSS Grid Layout**: Efficient world rendering
- **Modern CSS Effects**: Backdrop filters, transitions, and animations
- **Event-driven Architecture**: Modular JavaScript event system
- **Cross-browser Compatibility**: Supports modern browsers with fallbacks

---

## 👥 Team

**Development Team:**
- **Hershy Rosenfeld** - Lead Developer
- **Haim** - UI/UX Designer  
- **Nahman Ben Or** - Game Logic Developer
- **Inon Guetta** - Asset Manager
- **Aaron Madar** - Quality Assurance

---

## 📁 Project Structure

```
Minecraft-game/
├── README.md                    # Project documentation
├── html/
│   ├── login.html              # Main menu with help system
│   └── game.html               # Game interface
├── css/
│   ├── login.css               # Login page styling + modal
│   └── game.css                # Game interface styling
├── js/
│   ├── login.js                # Login functionality + help modal
│   ├── main.js                 # Main game logic
│   └── htmlgenerator.js        # World generation utility
└── assert/
    ├── images/
    │   ├── tools/              # Tool icons
    │   ├── mainlogo.png        # Game logo
    │   ├── start.png           # Start button
    │   ├── grass.webp          # Block textures
    │   ├── land.webp
    │   ├── rock.webp
    │   ├── bedrock.webp
    │   ├── tree.webp
    │   └── leaves.webp
    ├── cursorImages/           # Custom cursors
    ├── video/
    │   └── Minecraft.mp4       # Background video
    └── audio/
        └── minecraft-theme.mp3  # Background music
```

---

## 🚀 Installation

### Prerequisites
- Modern web browser (Chrome 88+, Firefox 78+, Safari 14+, Edge 88+)
- Local web server (recommended for full functionality)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Minecraft-game.git
   cd Minecraft-game
   ```

2. **Serve the files locally:**
   
   **Option A - Python (if installed):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B - Node.js:**
   ```bash
   npx serve .
   ```
   
   **Option C - Live Server (VS Code Extension):**
   - Install "Live Server" extension in VS Code
   - Right-click on `html/login.html` → "Open with Live Server"

3. **Access the game:**
   Open `http://localhost:8000/html/login.html` in your browser

### Direct File Access
For basic testing, you can open `html/login.html` directly in your browser, though some features may not work optimally.

---

## 🎮 Gameplay

### Getting Started
1. **Launch**: Open the game via `login.html`
2. **Help System**: Click the "?" button for comprehensive game instructions
3. **Start Playing**: Click the start button to enter the game world

### Controls & Interface

#### 🛠️ Toolbar (Right Side)
- **Axe** 🪓: Cut trees and wooden structures
- **Scissors** ✂️: Harvest leaves and plants  
- **Shovel** 🛠️: Dig dirt and soft materials
- **Stone Pickaxe** ⛏️: Mine stone and hard materials

#### 📦 Inventory (Left Side)
- **Grass**: Surface terrain block
- **Dirt**: Underground soil layer
- **Stone**: Hard building material
- **Bedrock**: Unbreakable foundation layer
- **Tree**: Wood building blocks
- **Leaves**: Decorative plant blocks

#### 🎯 Game Mechanics
1. **Resource Collection**: 
   - Select appropriate tool from toolbar
   - Click on blocks to harvest them
   - Resources automatically added to inventory

2. **Building**:
   - Select material from inventory
   - Click on empty spaces to place blocks
   - Build structures, landscapes, or art

3. **Tool Efficiency**:
   - Each tool works best on specific materials
   - Using wrong tool will be less effective
   - Strategic tool selection improves gameplay

---

## 🔧 Technical Details

### Architecture
- **Frontend Only**: Pure client-side implementation
- **Grid System**: CSS Grid for world layout (99×30 cells)
- **Event-Driven**: Click handlers for all interactions
- **State Management**: JavaScript objects for game state
- **Visual Feedback**: CSS transitions and hover effects

### Performance Considerations
- **Efficient Rendering**: CSS classes for block types
- **Minimal DOM Manipulation**: Pre-generated grid structure
- **Optimized Assets**: WebP images for faster loading
- **Smooth Animations**: Hardware-accelerated CSS transitions

### Browser APIs Used
- **Fullscreen API**: Immersive fullscreen experience
- **Web Audio API**: Background music control
- **CSS Backdrop Filter**: Modern glassmorphism effects
- **CSS Grid**: Responsive layout system

---

## 🌐 Browser Compatibility

| Browser | Min Version | Status | Notes |
|---------|-------------|---------|--------|
| Chrome | 88+ | ✅ Full Support | Best performance |
| Firefox | 78+ | ✅ Full Support | Good performance |
| Safari | 14+ | ⚠️ Partial | Backdrop filter limited |
| Edge | 88+ | ✅ Full Support | Same as Chrome |
| Mobile Chrome | 90+ | ✅ Mobile Optimized | Touch controls |
| Mobile Safari | 14+ | ⚠️ Partial | Some visual effects limited |

**⚠️ Note**: Backdrop filter effects may not work on older browsers but the game remains functional.

---

## 🐛 Known Issues

### Current Limitations
1. **Code Inconsistency**: `main.js` references HTML elements that don't exist in current markup
2. **Tool Mapping**: Some tool-to-material relationships need adjustment
3. **Mobile UX**: Touch controls could be more intuitive
4. **Audio Autoplay**: May be blocked by browser policies
5. **Safari Compatibility**: Some CSS effects degraded on older Safari versions

### Planned Fixes
- [ ] Reconcile JavaScript with actual HTML structure
- [ ] Improve mobile responsiveness
- [ ] Add keyboard shortcuts
- [ ] Implement save/load functionality
- [ ] Add more block types and tools

---

## 🚀 Future Improvements

### Short Term (v2.0)
- [ ] **Save System**: Local storage for world persistence
- [ ] **More Tools**: Additional specialized tools
- [ ] **Block Varieties**: Expanded material palette
- [ ] **Sound Effects**: Audio feedback for actions
- [ ] **Keyboard Controls**: Hotkeys for tools and materials

### Medium Term (v3.0)
- [ ] **Multiplayer**: Real-time collaborative building
- [ ] **World Generator**: Procedural terrain generation
- [ ] **Crafting System**: Combine materials to create new items
- [ ] **Achievements**: Goal-based progression system
- [ ] **Custom Worlds**: User-defined world parameters

### Long Term (v4.0+)
- [ ] **3D Mode**: Optional 3D perspective
- [ ] **Physics Engine**: Block gravity and interactions
- [ ] **NPCs**: Non-player characters and quests
- [ ] **Modding Support**: User-created content system
- [ ] **VR Support**: Virtual reality compatibility

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes with clear, commented code
4. Test across multiple browsers
5. Submit a pull request with detailed description

### Code Standards
- **HTML**: Semantic, accessible markup
- **CSS**: BEM methodology, mobile-first approach
- **JavaScript**: ES6+, clear variable names, comprehensive comments
- **Assets**: Optimized images, appropriate file formats

### Areas Needing Help
- 🐛 **Bug Fixes**: See issues tab
- 🎨 **UI/UX**: Design improvements
- 📱 **Mobile**: Touch interface optimization  
- 🌍 **i18n**: Additional language support
- ⚡ **Performance**: Optimization opportunities

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Mojang Studios**: Original Minecraft inspiration
- **FontAwesome**: Icon library
- **MDN Web Docs**: Technical reference
- **CSS Tricks**: Advanced CSS techniques
- **Our Beta Testers**: Community feedback and bug reports

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/Minecraft-game/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/Minecraft-game/discussions)  
- **Email**: minecraft2d.team@gmail.com

---

*Built with ❤️ by the Minecraft 2D Team*

**Last Updated**: December 2024  
**Version**: 1.0.0
