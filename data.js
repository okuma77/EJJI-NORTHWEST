var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.47250909050809575,
        "pitch": 0.4471966684864874,
        "fov": 1.0609204322191137
      },
      "linkHotspots": [
        {
          "yaw": -0.09392112534116492,
          "pitch": 0.07981049036039423,
          "rotation": 6.283185307179586,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-2",
      "name": "VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.91940471474323,
          "pitch": 0.09987564273668426,
          "rotation": 0,
          "target": "0-view-1"
        },
        {
          "yaw": 0.2691949493078116,
          "pitch": 0.0798681948451545,
          "rotation": 0,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-3",
      "name": "VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14652190230715334,
          "pitch": 0.10047906860941858,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
