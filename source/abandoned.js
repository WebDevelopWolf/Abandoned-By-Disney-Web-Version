// Abandoned By Disney - Text Game Engine
// (C) Web Develop Wolf (Liane Stevenson) 2017

var abandoned = function () {

    this.floorplanCheck = false;
    this.gameStart = true;

    // Game start
    this.Start = function () {
        this.floorplanCheck = false;
        if (this.gameStart == true) {
            this.changeScene('', 'start');
            this.gameStart = false;
        } else {
            this.changeScene('ending', 'start');
        }
    }

    // Gate Scene
    this.gate = function () {
        this.changeScene('start', 'gate');
    }

    // Courtyard Scene
    this.courtyard = function () {
        this.changeScene('gate', 'courtyard');
    }

    // Baloo Statue Scene
    this.baloo = function () {
        this.changeScene('courtyard', 'baloo');
    }

    // Palace Statue Scene
    this.palace = function () {
        this.changeScene('courtyard', 'palace');
    }

    // Baloo Palace Statue Scene
    this.palaceStatue = function () {
        this.changeScene('baloo', 'palace');
    }

    // Palace floorplan Scene
    this.floorplan = function () {
        this.changeScene('palace', 'floorplan');
    }
    this.takeFloorplan = function () {
        floorplanCheck = true;
        this.changeScene('floorplan', 'palace_1');
    }
    this.leaveFloorplan = function () {
        this.changeScene('floorplan', 'palace');
    }

    // Kitchen Scene
    this.kitchen = function () {
        if (floorplanCheck == true) {
            this.changeScene('palace_1', 'kitchen');
        } else {
            this.changeScene('palace', 'kitchen');
        }
    }
    this.leavekitchen = function () {
        if (this.floorplanCheck == true) {
            this.changeScene('kitchen', 'palace_1');
        } else {
            this.changeScene('kitchen', 'palace');
        }
    }

    // Batchroom Scene
    this.bathroom = function () {
        if (this.floorplanCheck == true) {
            this.changeScene('palace_1', 'bathroom');
        } else {
            this.changeScene('palace', 'bathroom');
        }
    }
    this.leavebathroom = function () {
        if (this.floorplanCheck == true) {
            this.changeScene('bathroom', 'palace_1');
        } else {
            this.changeScene('bathroom', 'palace');
        }
    }

    // Bedroom Scene
    this.bedrooms = function () {
        if (this.floorplanCheck == true) {
            this.changeScene('palace_1', 'bedrooms');
        } else {
            this.changeScene('palace', 'bedrooms');
        }
    }
    this.leavebedrooms = function () {
        if (this.floorplanCheck == true) {
            this.changeScene('bedrooms', 'palace_1');
        } else {
            this.changeScene('bedrooms', 'palace');
        }
    }

    // Stairs Scene
    this.stairs = function () {
        this.changeScene('bedrooms', 'stairs');
    }
    this.leavestairs = function () {
        this.changeScene('stairs', 'rooms_1');
    }
    this.decendstairs = function () {
        this.changeScene('stairs', 'innerCourtyard');
    }

    // Inner Courtyard
    this.python = function () {
        this.changeScene('innerCourtyard', 'python');
    }
    this.pythonlounge = function () {
        this.changeScene('python', 'lounge');
    }
    this.lounge = function () {
        this.changeScene('innerCourtyard', 'lounge');
    }

    // Lounge Scene
    this.mascotsonly = function () {
        this.changeScene('lounge', 'mascots');
    }

    // Mascots Area
    this.tables = function () {
        this.changeScene('mascots', 'tables');
    }
    this.leavetables = function () {
        this.changeScene('tables', 'mascots');
    }
    this.breakRoom = function () {
        this.changeScene('mascots', 'breakRoom');
    }
    this.leavebreakRoom = function () {
        this.changeScene('breakRoom', 'mascots');
    }
    this.hallway = function () {
        this.changeScene('mascots', 'hallway');
    }

    // Hallway 
    this.charPrep = function () {
        this.changeScene('hallway', 'charPrep');
    }
    this.charPrep1 = function () {
        this.changeScene('charPrep', 'charPrep_1');
    }

    // Char Prep
    this.costumes = function () {
        this.changeScene('charPrep_1', 'costumes');
    }
    this.mickey = function () {
        this.changeScene('charPrep_1', 'mickey');
    }
    this.leavecostumes = function () {
        this.changeScene('costumes', 'charPrep_2');
    }
    this.leavemickey = function () {
        this.changeScene('mickey', 'charPrep_2');
    }

    // Ending
    this.ending = function () {
        this.changeScene('charPrep_2', 'ending');
    }

    // Flip Scenes 
    this.changeScene = function (previousScene, nextScene) {
        // Hide Current Scene
        if (previousScene != '') {
            var prev = document.getElementById(previousScene);
            prev.className += " hide";
        }
        // Show New Scene
        var next = document.getElementById(nextScene);
        next.className = next.className.replace(/(?:^|\s)hide(?!\S)/,'');
    }
}