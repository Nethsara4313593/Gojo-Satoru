//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94713578498']
global.premium = ['94713578498']
global.ownernomer = '94713578498'
global.ownername = '🐦vip Boy Nexus'
global.botname = 'Nethsara'
global.footer = '©NexusNwInc.'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = 'Nethsara'
global.author = '🐦vip Boy Nexus'
global.sessionName = '{
  "creds": {
    "noiseKey": {
      "private": {
        "type": "Buffer",
        "data": "YBZRyC3ZNiHnsJ/ZkhS9tvnmSxMkpVBa/hIpaS/bl10="
      },
      "public": {
        "type": "Buffer",
        "data": "Rpq+V1inifLqr1RUPknPbvOPgLeRErVVxzlD7dQ+gwY="
      }
    },
    "signedIdentityKey": {
      "private": {
        "type": "Buffer",
        "data": "qMRhzNLsyp7jCc9af9KpBzs0jROzbo890Up5CTC4OEU="
      },
      "public": {
        "type": "Buffer",
        "data": "SFJee4+iNnSL7YhhgjjJmZ+PjVCzoUPxyyHsadeq1h4="
      }
    },
    "signedPreKey": {
      "keyPair": {
        "private": {
          "type": "Buffer",
          "data": "8KQZL1gzqSZJUr1Wu1DcWJJrpDA+nYm4gbswWu4QG2Y="
        },
        "public": {
          "type": "Buffer",
          "data": "hfFYo7e9Uvn1d4WC43AEpaYjK5IJXIPufkmOSHAr4DU="
        }
      },
      "signature": {
        "type": "Buffer",
        "data": "wRTfYaf82ktUDnpRSzh3GQZe2BcrbPDEZrDrd1Bx1oleWXesBMBJbf+xn86yxyjp+L1ktUzx7WOeBK9Z32JDgA=="
      },
      "keyId": 1
    },
    "registrationId": 117,
    "advSecretKey": "2V8HmJUjf2pvVMcJ/4DvWaPBAuFwD5OnpmtV1k+NzjA=",
    "nextPreKeyId": 31,
    "firstUnuploadedPreKeyId": 31,
    "serverHasPreKeys": true,
    "account": {
      "details": "COXWwrIEEOry4JUGGAI=",
      "accountSignatureKey": "2+a709akqS/6Nv/gvxBMg71KEPaItWPCx+QgY4xUVzw=",
      "accountSignature": "t4CAUI5R+SyfZrF31MrLZA3Zn5E5MJyXXqa0Sv18HmzN6qKShBJu7yyKEBfrgI4gTF3KHFIib+T89xAoT/amDQ==",
      "deviceSignature": "tXQzW49uzwTrAOjBpMGMRDoxu6bBVqgW4KqBvyRBQNmFTcsS7sh8LMh4lsBMVb+L9HFe0uwUI7SFQOsW3CBthg=="
    },
    "me": {
      "id": "94701509473:2@s.whatsapp.net",
      "verifiedName": "",
      "name": "No Name"
    },
    "signalIdentities": [
      {
        "identifier": {
          "name": "94701509473:2@s.whatsapp.net",
          "deviceId": 0
        },
        "identifierKey": {
          "type": "Buffer",
          "data": "Bdvmu9PWpKkv+jb/4L8QTIO9ShD2iLVjwsfkIGOMVFc8"
        }
      }
    ],
    "lastAccountSyncTimestamp": 1656240494,
    "myAppStateKeyId": "AAAAAPk9"
  },
  "keys": {
    "preKeys": {
      "1": {
        "private": {
          "type": "Buffer",
          "data": "gJ0O0SfuAbagaqPggSZJTtw6yibUENjSLJl3MtYXI1M="
        },
        "public": {
          "type": "Buffer",
          "data": "9Jj4UG32UfWafvPEZsSeP1rQ4KGQSvUmYHlkQE5g4xw="
        }
      },
      "2": {
        "private": {
          "type": "Buffer",
          "data": "CLUma4I8/g3zuti26AbBHDOkAsa2Z6jLcHfoR6X3NXM="
        },
        "public": {
          "type": "Buffer",
          "data": "gOjBmeuAN1LdPvl+nWYnw9JKxaH3SpKXqhWmq8V5Khc="
        }
      },
      "3": {
        "private": {
          "type": "Buffer",
          "data": "cOt+Gnv221HA38SgNNTfcsFYTmZXo8Qe7SNQ8as94HM="
        },
        "public": {
          "type": "Buffer",
          "data": "2J5MmbtzGuNA6/izMTQ51N6kJ4omR5ntGrhCpAvK9yI="
        }
      },
      "4": {
        "private": {
          "type": "Buffer",
          "data": "aE1hcAPwi/DSXSjMmLt8HKP2NvT9mq/VC27hlJqX00I="
        },
        "public": {
          "type": "Buffer",
          "data": "pD4WKjv1wJQ7lVj2/ojsL9Tx86MrZ17Gx12hH4M5HXM="
        }
      },
      "5": {
        "private": {
          "type": "Buffer",
          "data": "eMO2l+u/FEF96Uog5FQtUYM/tAbm8YPMx6mGggZ283Y="
        },
        "public": {
          "type": "Buffer",
          "data": "Ntjqi63S8zkLm4ivDBwNNxHp5wtXxwDkXkyDaeM8aWY="
        }
      },
      "6": {
        "private": {
          "type": "Buffer",
          "data": "KNLnSYzGJLRBn2TmShBwTTf9B+WDGKT8RCV1u2zoqHw="
        },
        "public": {
          "type": "Buffer",
          "data": "GPBFVUIXd9Cy6DpfpQ7MVKjNoD12JK7j2/Y83Mx4gnU="
        }
      },
      "7": {
        "private": {
          "type": "Buffer",
          "data": "ePkzvttisSBwAyKXhoOnQfVMj0vWEJ3GnDVSRkssHWw="
        },
        "public": {
          "type": "Buffer",
          "data": "olYFdJ4y4Fq/H5oO9JU/vZMGeD2Uz+PkezbB5SgjMg0="
        }
      },
      "8": {
        "private": {
          "type": "Buffer",
          "data": "sDF/kEOoQzmdEdB+zKBrR7U8EDzy2iXVkrABorHfb2U="
        },
        "public": {
          "type": "Buffer",
          "data": "JeaFCcCylWIaGGyHDbrDEOkO2PRU8mfnM3TxwGJ9oCY="
        }
      },
      "9": {
        "private": {
          "type": "Buffer",
          "data": "mDWDODbVLgkSIgzxlhGrFOCWIxsjxpXpGgY+MPC1IX0="
        },
        "public": {
          "type": "Buffer",
          "data": "N3z65J3faUyJWzrcvSik61TUQ3r7/q/zU/+MjO6D7Ec="
        }
      },
      "10": {
        "private": {
          "type": "Buffer",
          "data": "YAeOPAccYoOtpxLDiJT7r8HwSKQkC3MA2zsDiL6yj0Q="
        },
        "public": {
          "type": "Buffer",
          "data": "VeKs8xcQwrkmAyEiTRhQ0GV4IKVsdDUO+/LVxxhTNVk="
        }
      },
      "11": null,
      "12": {
        "private": {
          "type": "Buffer",
          "data": "SLw6e1EbJZBhp5JXkgln7Ko64fQPjiaHtVTRZSfEH2M="
        },
        "public": {
          "type": "Buffer",
          "data": "nqi9ADyJO1DTZsAIe6ez18P+5VMI3ROFMCkNr2D8oCM="
        }
      },
      "13": {
        "private": {
          "type": "Buffer",
          "data": "QJIJrbw6hKbaiVjRf8cul3auTAUpgH19wuV31tf0eEk="
        },
        "public": {
          "type": "Buffer",
          "data": "4O2xjSOXSig6m3yt8IIUohGXjTznCtPzruRcd5rPSj0="
        }
      },
      "14": {
        "private": {
          "type": "Buffer",
          "data": "WGL4DvW6jDP3DP4J8dpzfHUvKUkSnesXHHHClEhklVc="
        },
        "public": {
          "type": "Buffer",
          "data": "WeH2JKMZPoM1na8lfx77kDasu+qYlqC7i16gd7q6YgQ="
        }
      },
      "15": {
        "private": {
          "type": "Buffer",
          "data": "EONyFP8UhPrQBLoGiRqAVdDNJZmyTJ78CCTBNZyjtUg="
        },
        "public": {
          "type": "Buffer",
          "data": "Y6odEAKGsfEtxoXmEhs2QF5Hhgoq7ufLcFzwn0F5CSI="
        }
      },
      "16": {
        "private": {
          "type": "Buffer",
          "data": "uEMMalBvm5LynilRhSu/+oNWG6r5qUowzy0TfH448Uw="
        },
        "public": {
          "type": "Buffer",
          "data": "UBno7ZJG8tRHmOKbfuGjFrZjITTYBrGjuPkTod0H5hE="
        }
      },
      "17": {
        "private": {
          "type": "Buffer",
          "data": "8GDPPHt/RuRgtpl4SxyXCv4P2ria7+reU08qItV8wm4="
        },
        "public": {
          "type": "Buffer",
          "data": "TsCpGGOu9YjoZxwCU2e3eORdIVLli9p1Fuo46DLWViA="
        }
      },
      "18": {
        "private": {
          "type": "Buffer",
          "data": "kO56hITPlFWCSNPJSqpmlWrfX7OQGNuyhKjZcGK6pEk="
        },
        "public": {
          "type": "Buffer",
          "data": "foW0baO+21A5bK1ft/hYy47Qfu6qfAV1VVmtun1kfys="
        }
      },
      "19": {
        "private": {
          "type": "Buffer",
          "data": "cGFjU+lEEQCyjT5lPS+8f9iAiB6lhRafLlz46LaBU1k="
        },
        "public": {
          "type": "Buffer",
          "data": "ZApKAqmqiIS9mNS0+aSM/vM13JTAgBCHZTxrkC7+3Uw="
        }
      },
      "20": {
        "private": {
          "type": "Buffer",
          "data": "KOsCG3PvwRFm1gQKY+boLEEpHqcwkkIIdMlTDXlVj0c="
        },
        "public": {
          "type": "Buffer",
          "data": "GwhheQkss1xwQ4caBw9LAcFm17NApwGnHS3p/asLT34="
        }
      },
      "21": {
        "private": {
          "type": "Buffer",
          "data": "QD3xu9zud6mtNPkaU8clxmf6alpem3R1bTT3aBEp0VI="
        },
        "public": {
          "type": "Buffer",
          "data": "Xg5p+kSoBEPUGQ5vidsg4kpPjY2IaVhH53CAAXk2Nn4="
        }
      },
      "22": {
        "private": {
          "type": "Buffer",
          "data": "GEeyKjVunM7/aRAdZ/lLTPA27DhjUDcu0mLU+gwYeXQ="
        },
        "public": {
          "type": "Buffer",
          "data": "1NoI8Bec9JI9EDAsC1htn/2FVEexAfsyWAiJBNKHaEg="
        }
      },
      "23": {
        "private": {
          "type": "Buffer",
          "data": "UFUl63xab0yIxY+KJF7VveNA5lNViaTU75mYqKrWz2c="
        },
        "public": {
          "type": "Buffer",
          "data": "DD+TuoCsUfkKUP0kwxTbCp79eZhlHs7nqHHTvbJZngY="
        }
      },
      "24": {
        "private": {
          "type": "Buffer",
          "data": "KJefXtosokWNNs/qAw57lRCfopgkEwuk9sXnFrI5b1Q="
        },
        "public": {
          "type": "Buffer",
          "data": "88KEiNDsB1LVNVJGQ7gihXaTLbFCl0MEwZ685a5DnHM="
        }
      },
      "25": {
        "private": {
          "type": "Buffer",
          "data": "+HyXz5eMt53zGZUUrqbIat+EJiiXBLQdb5kpT0ieTkM="
        },
        "public": {
          "type": "Buffer",
          "data": "eOOVUk1hcMwKuo8tpaBO8bQDStKpQkRdRlqP/oZsSDs="
        }
      },
      "26": {
        "private": {
          "type": "Buffer",
          "data": "GG6djsWq29/1Xmx6jHnguZeYwJuaW/WUCVkKYSKb0nQ="
        },
        "public": {
          "type": "Buffer",
          "data": "q/DV8ZKb+2sSTxZhdQ2hk+cADJwqnHY0fw7CF1Lc9go="
        }
      },
      "27": {
        "private": {
          "type": "Buffer",
          "data": "eE7vsdytDcEsN4trm5hckTZmikFpOzLUeTYylsDCpnk="
        },
        "public": {
          "type": "Buffer",
          "data": "/A5xWaa8eDOKyEk8aneVrA7rQgYMdVtpgPhKxIrU4VA="
        }
      },
      "28": {
        "private": {
          "type": "Buffer",
          "data": "iLggWsg53jNFmf2+PNwYQn5IWFqXot67LfAbOYlDtk8="
        },
        "public": {
          "type": "Buffer",
          "data": "Q9l5Rc4XP8iMStBVpJ6uKv+BgIeeXMqh+0/o3Eebe1s="
        }
      },
      "29": {
        "private": {
          "type": "Buffer",
          "data": "ECzxU8KPpG+gQstfm8Cf1vUXwYUC9rg5VOlT5JfxzFE="
        },
        "public": {
          "type": "Buffer",
          "data": "BoUv5zcoangsUXK6JJMm02yHCp2CgaRbmOLC2DG+PFU="
        }
      },
      "30": {
        "private": {
          "type": "Buffer",
          "data": "4PC3tj6i6qwDFHgjTGSxpnHglei8q/hNFXFtBwh4E2U="
        },
        "public": {
          "type": "Buffer",
          "data": "hMga5d3EAH5aPITAy4e8uf7NWeStZX3ib/yF9o5vCUM="
        }
      }
    },
    "sessions": {
      "94701509473.0": {
        "_sessions": {
          "BYXlVp7H1TvCag4lcNON+P+mGVrYa33oVJlDy/TivZdJ": {
            "registrationId": 704876184,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "BcxQWYBqyt4WGYgk7h8KxUSPW03jEp1gOGu9NlPC89EE",
                "privKey": "iLpsrbZ2u0fqfkqkLGDQ1PvascFSBLX1u5V6vH69WWY="
              },
              "lastRemoteEphemeralKey": "BfXhCA28bnksWe3DHR7l+crb/JJHyEZAfY+3fq/m9zYP",
              "previousCounter": 0,
              "rootKey": "+MOQnl20TDiPzLb7QU7+/T0MEatlQ1aqtl4ROYfeZjM="
            },
            "indexInfo": {
              "baseKey": "BYXlVp7H1TvCag4lcNON+P+mGVrYa33oVJlDy/TivZdJ",
              "baseKeyType": 2,
              "closed": -1,
              "used": 1656240497501,
              "created": 1656240497501,
              "remoteIdentityKey": "Bdvmu9PWpKkv+jb/4L8QTIO9ShD2iLVjwsfkIGOMVFc8"
            },
            "_chains": {
              "BfXhCA28bnksWe3DHR7l+crb/JJHyEZAfY+3fq/m9zYP": {
                "chainKey": {
                  "counter": 3,
                  "key": "Fdzi7AChVaKEbDlV1iTPcMnj0mDDuDBUpjGPDwSygds="
                },
                "chainType": 2,
                "messageKeys": {}
              },
              "BcxQWYBqyt4WGYgk7h8KxUSPW03jEp1gOGu9NlPC89EE": {
                "chainKey": {
                  "counter": 1,
                  "key": "QFm0lovq8SRSkwnvT441TW097TRmsqsQ5uAilVUtBgI="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            }
          }
        },
        "version": "v1"
      },
      "94701509473:1.0": {
        "_sessions": {
          "BWq8ufiyhSjKI7eFwmyH6i2OXxzDwD6/94ZxxCCYCTxU": {
            "registrationId": 82,
            "currentRatchet": {
              "ephemeralKeyPair": {
                "pubKey": "BbzTiwH6DuJJfoFeP3GGRbIz2rOUlzJwPj9AFMKMaCBn",
                "privKey": "ABvQDrdgp4G5pR9b5f2U2uQeXyA/ha6fO8kPsEz0Ikw="
              },
              "lastRemoteEphemeralKey": "Bd9JfEvZrwchHMV2nkKEY3ST3/CCk6xw4/ahHoPcYApQ",
              "previousCounter": 0,
              "rootKey": "u9C01u6iGL2bfGTvnuxnADesZoU0oGXB8X+b7AmpDUM="
            },
            "indexInfo": {
              "baseKey": "BWq8ufiyhSjKI7eFwmyH6i2OXxzDwD6/94ZxxCCYCTxU",
              "baseKeyType": 1,
              "closed": -1,
              "used": 1656240505201,
              "created": 1656240505201,
              "remoteIdentityKey": "BSOPCkhNREPvjrAUnbPACEPqByWwyXQf7rgDwOGxUgYV"
            },
            "_chains": {
              "BbzTiwH6DuJJfoFeP3GGRbIz2rOUlzJwPj9AFMKMaCBn": {
                "chainKey": {
                  "counter": 0,
                  "key": "fu1uLGxJFyuV6oa62yDaiGQi6n8lMpZZVQ5cogH18bY="
                },
                "chainType": 1,
                "messageKeys": {}
              }
            },
            "pendingPreKey": {
              "signedKeyId": 1,
              "baseKey": "BWq8ufiyhSjKI7eFwmyH6i2OXxzDwD6/94ZxxCCYCTxU",
              "preKeyId": 4
            }
          }
        },
        "version": "v1"
      }
    },
    "appStateSyncKeys": {
      "AAAAAPk9": {
        "keyData": "HajVqUw2ttbJRKb6ehHe+ynW1lRJ3xcizjvnoXWKllI=",
        "fingerprint": {
          "rawId": 1179691877,
          "currentIndex": 1,
          "deviceIndexes": [
            0,
            1
          ]
        },
        "timestamp": "1655954557910"
      }
    }
  }
}'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
