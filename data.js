var APP_DATA = {
  "scenes": [
    {
      "id": "0-entree",
      "name": "entree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3013426944920095
      },
      "linkHotspots": [
        {
          "yaw": -3.0317397531678445,
          "pitch": 0.12451294037266436,
          "rotation": 0,
          "target": "1-chambre1"
        },
        {
          "yaw": -0.5018804393185761,
          "pitch": 0.010771206497455665,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": -0.1570068035220995,
          "pitch": 0.30325373571403524,
          "rotation": 0,
          "target": "3-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-chambre1",
      "name": "chambre1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9492391995878,
          "pitch": 0.10551696160430879,
          "rotation": 0,
          "target": "0-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.394920044360105,
          "pitch": 0.03574124217137964,
          "rotation": 0,
          "target": "0-entree"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall1",
      "name": "hall1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8221636358010995,
          "pitch": 0.36206613276457666,
          "rotation": 0,
          "target": "0-entree"
        },
        {
          "yaw": 2.5194710052094447,
          "pitch": 0.05160524396873356,
          "rotation": 0,
          "target": "7-wc"
        },
        {
          "yaw": 1.5722428776153237,
          "pitch": 0.009689650777135128,
          "rotation": 0,
          "target": "6-sdb"
        },
        {
          "yaw": -1.997927679431541,
          "pitch": 0.07175305963920309,
          "rotation": 0,
          "target": "4-chambre2"
        },
        {
          "yaw": -0.20748635645371571,
          "pitch": 0.4193372233538071,
          "rotation": 0,
          "target": "8-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-chambre2",
      "name": "chambre2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1122841601659346,
          "pitch": 0.08144799898229138,
          "rotation": 0,
          "target": "3-hall1"
        },
        {
          "yaw": -0.24894717533590338,
          "pitch": 0.037886948312475965,
          "rotation": 0,
          "target": "5-terrasse1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-terrasse1",
      "name": "terrasse1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09646630905826648,
          "pitch": 0.10548431794965119,
          "rotation": 0,
          "target": "4-chambre2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sdb",
      "name": "sdb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.649415598643138,
          "pitch": 0.009144130276151685,
          "rotation": 0,
          "target": "3-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wc",
      "name": "wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8793682136332706,
          "pitch": -0.04037526958724591,
          "rotation": 0,
          "target": "3-hall1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hall2",
      "name": "hall2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0027945136550293626,
          "pitch": 0.01396689489224201,
          "rotation": 0,
          "target": "13-cuisine"
        },
        {
          "yaw": 0.485795463709243,
          "pitch": 0.03210436416297213,
          "rotation": 0,
          "target": "10-chambre4"
        },
        {
          "yaw": 3.0235308313255445,
          "pitch": 0.3827969011452357,
          "rotation": 0,
          "target": "3-hall1"
        },
        {
          "yaw": -1.9466544896894487,
          "pitch": 0.2189696074587868,
          "rotation": 0,
          "target": "9-chambre3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-chambre3",
      "name": "chambre3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5468077009711205,
          "pitch": 0.052366640970776146,
          "rotation": 0,
          "target": "8-hall2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-chambre4",
      "name": "chambre4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 3.088212135502557,
        "pitch": 0.04051783873342529,
        "fov": 1.3013426944920095
      },
      "linkHotspots": [
        {
          "yaw": -1.413210760930049,
          "pitch": 0.08623704841290802,
          "rotation": 0,
          "target": "8-hall2"
        },
        {
          "yaw": 2.4242110363426095,
          "pitch": 0.09299921543733802,
          "rotation": 0,
          "target": "11-chambre4sdb"
        },
        {
          "yaw": -2.457801946223169,
          "pitch": 0.12721615421888188,
          "rotation": 0,
          "target": "12-chambre4dressing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-chambre4sdb",
      "name": "chambre4sdb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.447133505880866,
          "pitch": 0.3085317693493046,
          "rotation": 0,
          "target": "10-chambre4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-chambre4dressing",
      "name": "chambre4dressing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0189632682255514,
          "pitch": 0.23021392533254215,
          "rotation": 0,
          "target": "10-chambre4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cuisine",
      "name": "cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4396060341394374,
          "pitch": -0.00008385852206060918,
          "rotation": 0,
          "target": "8-hall2"
        },
        {
          "yaw": -1.1500749539658415,
          "pitch": 0.026384383443822657,
          "rotation": 0,
          "target": "14-terrasse2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-terrasse2",
      "name": "terrasse2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12681219622404427,
          "pitch": 0.10803400750007697,
          "rotation": 0,
          "target": "13-cuisine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "f5",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
