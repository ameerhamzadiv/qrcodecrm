import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState, useRef, useEffect, useCallback } from "react";
import  { QRCodeStyling, browserUtils } from '@liquid-js/qr-code-styling'



// ---------- configuration helpers ----------

const defaultConfig = {
    shape: "square",
    width: 270,
    height: 270,
    type: "svg",
    data: "https://example.com",
    qrOptions: {
        errorCorrectionLevel: "H", // <--- allows for up to 30% damage
    },
    dotsOptions: { 
        type: "square",
        gradient: {
            type: "linear",      // or "radial"
            rotation: 0,
            colorStops: [
                {
          "offset": 0.017,
          "color": "#000000"
        },
        {
          "offset": 0.7101,
          "color": "#000000"
        },
        {
          "offset": 1,
          "color": "#000000"
        }
            ]
        }
    },

    cornersSquareOptions: {
    type: "square",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        {
          offset: 0.25,
          color: "#000"
        },
        {
          offset: 0.53,
          color: "#000"
        },
        {
          offset: 0.78,
          color: "#000"
        }
      ]
    }
  },

   cornersDotOptions: {
    type: "square",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        {
          offset: 0,
          color: "#000"
        },
        {
          offset: 0.3799,
          color: "#000"
        },
        {
          offset: 1,
          color: "#000"
        }
      ]
    }
  },

    backgroundOptions: {
        color: "#fff",
        margin: 0.99,
        round: 0,
        gradient: {
            type: "linear",      // or "radial"
            rotation: 0,
            colorStops: [
                {
          "offset": 0.017,
          "color": "#fff"
        },
        {
          "offset": 0.7101,
          "color": "#fff"
        },
        {
          "offset": 1,
          "color": "#fff"
        }
            ]
        }
    },
    
   
    image: "",
    imageOptions: {
    mode: "center",
    imageSize: 0,
    margin: 0.3,
    crossOrigin: "anonymous",
    fill: {
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          {
            offset: 0,
            color: "#ffffff"
          },
          {
            offset: 0.4837,
            color: "#ffffff"
          },
          {
            offset: 1,
            color: "#ffffff"
          }
        ]
      }
    }
  },

};

const CenterlogoConfig = {
    shape: "square",
    width: 270,
    height: 270,
    type: "svg",
    data: "https://designcosmics.com",
    qrOptions: {
        errorCorrectionLevel: "H", // <--- allows for up to 30% damage
    },
    dotsOptions: { 
        type: "classy-rounded",
        gradient: {
            type: "linear",      // or "radial"
            rotation: 0,
            colorStops: [
                {
          "offset": 0.017,
          "color": "#f45e51"
        },
        {
          "offset": 0.7101,
          "color": "#f24d5d"
        },
        {
          "offset": 1,
          "color": "#f13b69"
        }
            ]
        }
    },

    cornersSquareOptions: {
    type: "classy",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        {
          offset: 0.25,
          color: "#f45d51"
        },
        {
          offset: 0.53,
          color: "#f24e5c"
        },
        {
          offset: 0.78,
          color: "#f0356d"
        }
      ]
    }
  },

   cornersDotOptions: {
    type: "inpoint",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        {
          offset: 0,
          color: "#f45d51"
        },
        {
          offset: 0.3799,
          color: "#f24d5c"
        },
        {
          offset: 1,
          color: "#f0356d"
        }
      ]
    }
  },

    backgroundOptions: {
        color: "#fff",
        margin: 1,
        round: 0,
        gradient: {
            type: "linear",      // or "radial"
            rotation: 0,
            colorStops: [
                {
          "offset": 0.017,
          "color": "#fff"
        },
        {
          "offset": 0.7101,
          "color": "#fff"
        },
        {
          "offset": 1,
          "color": "#fff"
        }
            ]
        }
    },
    
   
    image: "assets/images/qricons/designcosmics.png",
    imageOptions: {
    mode: "center",
    imageSize: 0.27,
    margin: 0,
    crossOrigin: "anonymous",
    fill: {
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          {
            offset: 0,
            color: "#ffffff"
          },
          {
            offset: 0.4837,
            color: "#ffffff"
          },
          {
            offset: 1,
            color: "#ffffff"
          }
        ]
      }
    }
  },

};

const CenterlogoCircleConfig = {
    shape: "circle",
    width: 270,
    height: 270,
    type: "svg",
    data: "https://codelexdigital.com",
    qrOptions: {
        errorCorrectionLevel: "H", // <--- allows for up to 30% damage
    },
    dotsOptions: { 
        type: "dot",
        gradient: {
            type: "linear",      // or "radial"
            rotation: 0,
            colorStops: [
                {
          "offset": 0.017,
          "color": "#192874"
        },
        {
          "offset": 0.7101,
          "color": "#1e7ab5"
        },
        {
          "offset": 1,
          "color": "#1d2265"
        }
            ]
        }
    },

    cornersSquareOptions: {
    type: "extra-rounded",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
       {
          "offset": 0.017,
          "color": "#192874"
        },
        {
          "offset": 0.7101,
          "color": "#1e7ab5"
        },
        {
          "offset": 1,
          "color": "#1d2265"
        }
      ]
    }
  },

   cornersDotOptions: {
    type: "dot",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        {
          "offset": 0.017,
          "color": "#192874"
        },
        {
          "offset": 0.7101,
          "color": "#1e7ab5"
        },
        {
          "offset": 1,
          "color": "#1d2265"
        }
      ]
    }
  },

    backgroundOptions: {
        color: "#fff",
        margin: 1,
        round: 1,
        gradient: {
            type: "linear",      // or "radial"
            rotation: 0,
            colorStops: [
                {
          "offset": 0.017,
          "color": "#fff"
        },
        {
          "offset": 0.7101,
          "color": "#fff"
        },
        {
          "offset": 1,
          "color": "#fff"
        }
            ]
        }
    },
    
   
    image: "assets/images/qricons/codelexdigital.png",
    imageOptions: {
    mode: "center",
    imageSize: 0.4,
    margin: 0.3,
    crossOrigin: "anonymous",
    fill: {
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          {
            offset: 0,
            color: "#ffffff"
          },
          {
            offset: 0.4837,
            color: "#ffffff"
          },
          {
            offset: 1,
            color: "#ffffff"
          }
        ]
      }
    }
  },

};

const backgroundlogoConfig = {
    shape: "circle",
    width: 500,
    margin: 5,
    data: "https://example.com",
    qrOptions: {
        errorCorrectionLevel: "Q",
    },
    dotsOptions: { 
        type: "extra-rounded",
        color: "#571947"
    },

    cornersSquareOptions: {
    type: "extra-rounded"
  },

    backgroundOptions: {
        color: "#ffffff",
        margin: 3,
        round: 1
    },
    
   
    image: "assets/images/qr-default-svg.svg",
    imageOptions: {
    mode: "background",
    imageSize: 1,
    margin: 1,
    crossOrigin: "anonymous",
    fill: {
        color: "#ffffff"
    }
  },

};

const QRShapes = [
        {
        "shape": "square",
        "img": "assets/images/qricons/square-shape.png"
        },
        {
        "shape": "circle",
        "img": "assets/images/qricons/circle-shape.png"
        }
    ]

//const dotTypes = ["square", "rounded", "dots", "classy", "classy-rounded", "extra-rounded", "circle", "rect", "diamond", "heart", "plus", "rounded-bars", "stars", "line"];
const dotTypes = ["square", "small-square", "tiny-square", "rounded", "dot","random-dot", "classy", "classy-rounded", "extra-rounded", "vertical-line", "diamond", "horizontal-line"];

const cornerTypes = ["square", "circle" ,"extra-rounded", "classy", "outpoint", "inpoint"];

const cornerDotTypes = [ "square", "dot", "heart", "extra-rounded", "classy", "outpoint", "inpoint"];

const eccLevels = ["L", "M", "Q", "H"];

const extensions = ["png", "svg", "jpg", "webp"];

const imageMode = ["center", "background", "overlay"];

const gradientColor = {
    type: "linear",      // or "radial"
    rotation: 0,
    colorStops: [
        {
            "offset": 0.017,
            "color": "#000000"
        },
        {
            "offset": 0.7101,
            "color": "#000000"
        },
        {
            "offset": 1,
            "color": "#000000"
        }
    ]
}

const AddQRCodeLayer = () => {


    const qrRef = useRef(null);
    let qr = useRef(new QRCodeStyling(defaultConfig));
    const [qrConfig, setQrConfig] = useState(defaultConfig);
    const [contentType, setContentType] = useState("URL");
    const [contentFields, setContentFields] = useState({ url: "https://example.com" });
    const [dotcolorType, setdotcolorType] = useState("solid");
    const [backgroundColorType, setbackgroundColorType] = useState("solid");
    const [cornerColorType, setcornerColorType] = useState("solid");
    const [cornerDotColorType, setcornerDotColorType] = useState("solid");
    const [imageDotFillColorType, setimageDotFillColorType] = useState("solid");
    const [qrWidth, setqrWidth] = useState(300);
    const [qrHeight, setqrHeight] = useState(300);


   

    // ---------- content‑string builder ----------
    const buildData = useCallback(() =>  {
        switch (contentType) {
            case "URL":
                return contentFields.url || "";
            case "Text":
                return contentFields.text || "";
            case "Email":
                return `mailto:${contentFields.email || ""}`;
            case "Phone":
                return `tel:${contentFields.phone || ""}`;
            case "Location":
                return contentFields.location || "";
            case "SMS":
                return `sms:${contentFields.smsNumber || ""}:${contentFields.smsBody || ""}`;
            case "WiFi": {
                const { ssid = "", password = "", encryption = "WPA" } = contentFields;
                return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
            }
            case "vCard": {
                const {
                    firstName = "",
                    lastName = "",
                    org = "",
                    title = "",
                    email = "",
                    phone = ""
                } = contentFields;
                return `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\nORG:${org}\nTITLE:${title}\nEMAIL:${email}\nTEL:${phone}\nEND:VCARD`;
            }
            case "Event": {
                const { summary = "", location = "", start = "", end = "" } = contentFields;
                return `BEGIN:VEVENT\nSUMMARY:${summary}\nLOCATION:${location}\nDTSTART:${start.replace(/[-:]/g, "")}\nDTEND:${end.replace(/[-:]/g, "")}\nEND:VEVENT`;
            }
            default:
                return "";
        }
    }, [contentType, contentFields]);



useEffect(() => {
    if (!qrRef.current) return;

    try {
        // Clean old QR if it exists
        qrRef.current.innerHTML = "";

        // Create new QR instance
        const newQr = new QRCodeStyling({
            ...qrConfig,
            data: buildData()
        });

        newQr.append(qrRef.current);
        qr.current = newQr;
    } catch (error) {
        console.error("QR code generation failed:", error);

        // Optional fallback UI:
        if (qrRef.current) {
            qrRef.current.innerHTML = "<p style='color:red;'>QR generation failed. Please try again.</p>";
        }
    }
}, [qrConfig, contentFields, contentType, buildData]);



     /* --------------- button handlers ---------------- */
  const handleSwitchDefaultQR = () => setQrConfig(defaultConfig);
  const handleSwitchCenterLogoQR = (e) => {
    e?.preventDefault?.(); // prevent any default behavior (optional)
    setQrConfig(CenterlogoConfig);
  };
  const handleSwitchCenterLogoCircleQR = (e) => {
    e?.preventDefault?.(); // prevent any default behavior (optional)
    setQrConfig(CenterlogoCircleConfig);
  };
  const handleSwitchBackgroundQR = () => {
    setQrConfig(backgroundlogoConfig);
  };

   useEffect(() => {
    try {
        qr.current.append(qrRef.current);
    } catch (error) {
        console.error("Error while appending QR code:", error);
    }
}, []);


 
 
    

    // ---------- helpers ----------
    const handleFieldChange = (field, value) => {
        setContentFields(prev => ({ ...prev, [field]: value }));
    };
/*
    const updateStyle = (propPath, value) => {
        console.log("Start1", propPath,value);
        const keys = propPath.split(".");
        console.log("keys", keys);
        setQrConfig(prev => {
            const cloned = JSON.parse(JSON.stringify(prev));
            let obj = cloned;
            for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
            obj[keys[keys.length - 1]] = value;
            return cloned;
        });
    };
    */

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const updateStyle = (propPath, value) => {
    const keys = propPath.replace(/\[(\w+)\]/g, '.$1').split('.');

     // Apply clamping for known risky fields
    if (propPath === "backgroundOptions.margin" || propPath === "imageOptions.margin") {
        value = clamp(value, 0, 10); // Limit margin to 0–10
    }

    if (propPath === "imageOptions.imageSize") {
        value = clamp(value, 0.1, 1); // Limit imageSize to 0.1–1
    }

    setQrConfig(prev => {
        try {
            const cloned = JSON.parse(JSON.stringify(prev));
            let obj = cloned;

            for (let i = 0; i < keys.length - 1; i++) {
                const key = keys[i];
                const nextKey = keys[i + 1];
                const isNextKeyIndex = !isNaN(parseInt(nextKey));
                if (obj[key] === undefined) {
                    obj[key] = isNextKeyIndex ? [] : {};
                }
                obj = obj[key];
            }

            obj[keys[keys.length - 1]] = value;
            return cloned;
        } catch (error) {
            console.error("Failed to update QR config:", error);
            return prev; // Return previous config if failed
        }
    });
};




   const handleLogoUpload = (event) => {
    try {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => updateStyle("image", reader.result);
        reader.onerror = (e) => console.error("FileReader error:", e);
        reader.readAsDataURL(file);
    } catch (error) {
        console.error("Error in handleLogoUpload:", error);
    }
};


    const fileInputRef = useRef(null);

    const removeImage = () => {

        updateStyle("image", null)
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    

    const downloadQR = (filename = "QR-Code", extension = "png", width = 1200, height = 1200) => {
        console.log("Qr Download: ", qr.current);
        console.log("qr.current.download", qr.current.download);
        //qr.current.download({ name: filename, extension: extension });
        browserUtils.download(qr.current, {name: filename, extension: extension }, { width: width, height: height })
       
    };

  

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <style>
                {`

            .accordion .accordion-item{
                  border-radius: 0;
                  padding: 15px 0px 15px 20px;
            }
            .card-trans{
                      background-color: transparent !important;
                      box-shadow: none !important;
                          border: none !important;
            }
            .svg-wr{
                position: relative;
    padding-bottom: 100%;
            }
            .svg-wr svg{
                   width: 100%;
    height: 100%;
    inset: 0;
    position: absolute;
            }
            
            `}
            </style>
            <div className="card h-100 p-0 radius-12 card-trans">
                <div className="card-body p-24">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-7">
                            <div className="card border">
                                <div className="card-body">


                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                <div className="mb-20">
                                                    <label
                                                        htmlFor="name"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        QR Name <span className="text-danger-600">*</span>
                                                        
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control radius-8"
                                                        id="name"
                                                        placeholder="Enter Name"
                                                        onChange={e => updateStyle("qrname", e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                <div className="mb-20">
                                                    <label
                                                        htmlFor="type"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Type <span className="text-danger-600">*</span>{" "} 
                                                    </label>
                                                    <select
                                                        className="form-control radius-8 form-select"
                                                        id="type"
                                                        value={contentType}
                                                        onChange={e => {
                                                            setContentType(e.target.value);
                                                            setContentFields({});
                                                        }}
                                                    >
                                                        <option>URL</option>
                                                        <option>Text</option>
                                                        <option>Email</option>
                                                        <option>Phone</option>
                                                        <option>Location</option>
                                                        <option>SMS</option>
                                                        <option>WiFi</option>
                                                        <option>vCard</option>
                                                        <option>Event</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {contentType === "URL" && (
                                            <div className="mb-20">
                                                <label
                                                    htmlFor="url"
                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                >
                                                    Url
                                                </label>
                                                <input
                                                    type="url"
                                                    className="form-control radius-8"
                                                    id="url"
                                                    placeholder="https://"
                                                    value={contentFields.url || ""}
                                                    onChange={e => handleFieldChange("url", e.target.value)}
                                                />
                                            </div>
                                        )}
                                        {contentType === 'Text' && (
                                            <div className="mb-20">
                                                <label
                                                    htmlFor="text"
                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                >
                                                    Text
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control radius-8"
                                                    id="text"
                                                    placeholder="Enter text here"
                                                    value={contentFields.text || ""}
                                                    onChange={e => handleFieldChange("text", e.target.value)}
                                                />
                                            </div>
                                        )}
                                        {contentType === 'Email' && (
                                            <div className="mb-20">
                                                <label
                                                    htmlFor="email"
                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control radius-8"
                                                    id="email"
                                                    placeholder="Enter email address"
                                                    value={contentFields.email || ""}
                                                    onChange={e => handleFieldChange("email", e.target.value)}
                                                />
                                            </div>
                                        )}
                                        {contentType === 'Phone' && (
                                            <div className="mb-20">
                                                <label
                                                    htmlFor="phone"
                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                >
                                                    Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control radius-8"
                                                    id="phone"
                                                    placeholder="Enter phone number"
                                                    value={contentFields.phone || ""}
                                                    onChange={e => handleFieldChange("phone", e.target.value)}
                                                />
                                            </div>
                                        )}
                                        {contentType === 'Location' && (
                                            <div className="mb-20">
                                                <label
                                                    htmlFor="location"
                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                >
                                                    Location Url
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control radius-8"
                                                    id="location"
                                                    placeholder="Enter map url"
                                                    value={contentFields.location || ""}
                                                    onChange={e => handleFieldChange("location", e.target.value)}
                                                />
                                            </div>
                                        )}
                                        {contentType === 'SMS' && (
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="smsNumber"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="smsNumber"
                                                            placeholder="Enter phone number"
                                                            value={contentFields.smsNumber || ""}
                                                            onChange={e => handleFieldChange("smsNumber", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="smsBody"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Message
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="smsBody"
                                                            placeholder="Enter message"
                                                            value={contentFields.smsBody || ""}
                                                            onChange={e => handleFieldChange("smsBody", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {contentType === 'WiFi' && (
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="ssid"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            SSID
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="ssid"
                                                            placeholder="Enter ssid"
                                                            value={contentFields.ssid || ""}
                                                            onChange={e => handleFieldChange("ssid", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="password"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Password
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="password"
                                                            placeholder="Enter message"
                                                            value={contentFields.password || ""}
                                                            onChange={e => handleFieldChange("password", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="encryption"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Encryption
                                                        </label>
                                                        <select
                                                            className="form-control radius-8 form-select"
                                                            id="encryption"
                                                            value={contentFields.encryption || "WPA"}
                                                            onChange={e => handleFieldChange("encryption", e.target.value)}
                                                        >
                                                            <option value="WPA">WPA/WPA2</option>
                                                            <option value="WEP">WEP</option>
                                                            <option value="">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {contentType === 'vCard' && (
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="first-name"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="first-name"
                                                            placeholder="Enter first name"
                                                            value={contentFields.firstName || ""}
                                                            onChange={e => handleFieldChange("firstName", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="last-name"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="last-name"
                                                            placeholder="Enter last name"
                                                            value={contentFields.lastName || ""}
                                                            onChange={e => handleFieldChange("lastName", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="organization"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Organization
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="organization"
                                                            placeholder="Enter organization"
                                                            value={contentFields.org || ""}
                                                            onChange={e => handleFieldChange("org", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="title"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Title
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="title"
                                                            placeholder="Enter title"
                                                            value={contentFields.title || ""}
                                                            onChange={e => handleFieldChange("title", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="email"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="email"
                                                            placeholder="Enter email"
                                                            value={contentFields.email || ""}
                                                            onChange={e => handleFieldChange("email", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="phone"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="phone"
                                                            placeholder="Enter phone number"
                                                            value={contentFields.phone || ""}
                                                            onChange={e => handleFieldChange("phone", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {contentType === 'Event' && (
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="summary"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Summary
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="summary"
                                                            placeholder="Enter summary"
                                                            value={contentFields.summary || ""}
                                                            onChange={e => handleFieldChange("summary", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="location"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Location
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control radius-8"
                                                            id="location"
                                                            placeholder="Enter location"
                                                            value={contentFields.location || ""}
                                                            onChange={e => handleFieldChange("location", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="start"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            Start
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-control radius-8"
                                                            id="start"
                                                            placeholder="Enter start"
                                                            value={contentFields.start || ""}
                                                            onChange={e => handleFieldChange("start", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="end"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                        >
                                                            End
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-control radius-8"
                                                            id="end"
                                                            placeholder="Enter end"
                                                            value={contentFields.end || ""}
                                                            onChange={e => handleFieldChange("end", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                       
                                        <div className="row">
                                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#QROptions"
                                                                aria-expanded="false"
                                                                aria-controls="QROptions"
                                                            >
                                                                QR Options
                                                            </button>
                                                        </h2>
                                                        
                                                        <div
                                                            id="QROptions"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                <div className="row">
                                                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                        <div className="mb-20">
                                                                            <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                                                Shape:
                                                                            </label>
                                                                            <div className="d-flex">
                                                                           {QRShapes?.map((t, index) => (
                                                                            <>
                                                                            
                                                                             <div key={t} className="form-check checked-primary-box checked-primary d-flex align-items-center gap-2">
                                                         <input className="form-check-input"
                                                         value={t?.shape}
                                                         checked={qrConfig?.shape === t?.shape ? true : false }
                                                        onChange={e => updateStyle("shape", e.target.value)}
                                                           type="radio" hidden name="Shape" id={`Shape-${index + 1}`}
                                                        
                                                        
                                                        
                                                        />
                                                        <label className="icon-checkbox form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for={`Shape-${index + 1}`}> 
                                                            <img src={t?.img} alt={t?.shape} />
                                                           
                                                            </label>

                                                    </div>
                                                    </>
                                                       ))}  
                                                       </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                        <div className="mb-20">
                                                    <label
                                                        htmlFor="levels"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Error correction level:
                                                    </label>
                                                    <select
                                                        className="form-control radius-8 form-select"
                                                        id="levels"
                                                        value={qrConfig?.qrOptions?.errorCorrectionLevel}
                                                        onChange={e => updateStyle("qrOptions.errorCorrectionLevel", e.target.value)}
                                                    >
                                                        {eccLevels.map(t => (
                                                            <option key={t}>{t}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#Dots"
                                                                aria-expanded="false"
                                                                aria-controls="Dots"
                                                            >
                                                                Dots
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="Dots"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                <div className="row">
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                                    <div className="mb-20">
                                                                            <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                                                Type:
                                                                            </label>
                                                                            <div className="d-flex flex-wrap">
                                                                           {dotTypes.map((t, index) => (
                                                                            <>
                                                                            
                                                                             <div key={t}  className="form-check checked-primary-box checked-primary d-flex align-items-center gap-2">
                                                         <input className="form-check-input"
                                                         value={t}
                                                         checked={qrConfig?.dotsOptions?.type === t ? true : false }
                                                        onChange={e => updateStyle("dotsOptions.type", e.target.value)}
                                                           type="radio" hidden name="dotsOptions" id={`dotsOptions-${index + 1}`}
                                                        
                                                        
                                                        
                                                        />
                                                        <label className="icon-checkbox form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for={`dotsOptions-${index + 1}`}> 
                                                            <i class={`sprite sprite-body sprite-${t}`}></i>
                                                           
                                                            </label>

                                                    </div>
                                                    </>
                                                       ))}  
                                                       </div>
                                                                            
                                                                        </div>
                                                                    </div>

                                                                    <p className="text-sm text-neutral-500">Color Mode</p>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="dotcolorType" id="dotcolorType"
                                                        checked={dotcolorType === "solid" ? true : false }
                                                        onChange={e => setdotcolorType("solid")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="dotcolorType"> Solid Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="dotcolorType" id="dotcolorType"
                                                        checked={dotcolorType === "gradient" ? true : false }
                                                        onChange={e => setdotcolorType("gradient")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="dotcolorType"> Gradient Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    { dotcolorType === "solid" && (
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="dotSolidColor"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"

                                                        >
                                                            Color
                                                        </label>
                                                        <input
                                                            type="color"
                                                            className="form-control radius-8"
                                                            id="dotSolidColor"
                                                            value={qrConfig?.dotsOptions?.gradient?.colorStops[0]?.color ? qrConfig?.dotsOptions?.gradient?.colorStops[0]?.color  : qrConfig?.dotsOptions?.color}
                                                                                    
                                                                                    onChange={e => {
                                                                                        updateStyle(`dotsOptions.gradient.colorStops[0].color`, e.target.value); 
                                                                                        updateStyle(`dotsOptions.gradient.colorStops[1].color`, e.target.value);
                                                                                        updateStyle(`dotsOptions.gradient.colorStops[2].color`, e.target.value);
                                                                                    }}
                                                        />
                                                    </div>
                                                    )}
                                                    { dotcolorType === "gradient" && (
                                                    <div className="row">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="dotGradientColorType"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Type
                                                                </label>
                                                                <select
                                                                    className="form-control radius-8 form-select"
                                                                    id="dotGradientColorType"
                                                                    value={qrConfig?.dotsOptions?.gradient?.type}
                                                                   onChange={e => updateStyle("dotsOptions.gradient.type", e.target.value)}
                                                                >

                                                                    <option>linear</option>
                                                                    <option>radial</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="dotGradientColorAngel"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Angel
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    min="0"

                                                                    className="form-control radius-8"
                                                                    id="dotGradientColorAngel"
                                                                    value={qrConfig?.dotsOptions?.gradient?.rotation ? qrConfig?.dotsOptions?.gradient?.rotation : 0}
                                                                   onChange={e => updateStyle("dotsOptions.gradient.rotation", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        {gradientColor?.colorStops?.map((t, index) => (
                                                            <>
                                                        <div key={t?.color} className="col-xxl-4 col-xl-4 col-lg-4">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor={`dotGradientColor${index}`}
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Color & Offset
                                                                </label>
                                                                <input
                                                                    type="color"
                                                                    className="form-control radius-8"
                                                                    id={`dotGradientColor${index}`}
                                                                    value={qrConfig?.dotsOptions?.gradient?.colorStops[index]?.color ? qrConfig?.dotsOptions?.gradient?.colorStops[index]?.color  : (qrConfig?.dotsOptions?.color ? qrConfig?.dotsOptions?.color : t?.color)}
                                                                   onChange={e => updateStyle(`dotsOptions.gradient.colorStops[${index}].color`, e.target.value)}
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="0" 
                                                                    max="1"
                                                                    step="0.01"
                                                                    className="form-range radius-8 mt-3"
                                                                    id={`dotGradientColoroffset${index}`}
                                                                    value={qrConfig?.dotsOptions?.gradient?.colorStops[index]?.offset ? qrConfig?.dotsOptions?.gradient?.colorStops[index]?.offset  : (qrConfig?.dotsOptions?.offset ? qrConfig?.dotsOptions?.offset : t?.offset)}
                                                                   onChange={e => updateStyle(`dotsOptions.gradient.colorStops[${index}].offset`, e.target.value)}
                                                                   placeholder="Offset"
                                                                />
                                                                {qrConfig?.dotsOptions?.gradient?.colorStops[index]?.offset ? qrConfig?.dotsOptions?.gradient?.colorStops[index]?.offset  : (qrConfig?.dotsOptions?.offset ? qrConfig?.dotsOptions?.offset : t?.offset)}
                                                            </div>
                                                        </div>
                                                        </>
                                                        ))}
                                                       
                                                    </div>
                                                    )}
                                                </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#cornerStyle"
                                                                aria-expanded="false"
                                                                aria-controls="cornerStyle"
                                                            >
                                                                Corner Style
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="cornerStyle"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                <div className="row">
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                                       <div className="mb-20">
                                                                            <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                                                Type:
                                                                            </label>
                                                                            <div className="d-flex justify-content-between">
                                                                           {cornerTypes.map((t, index) => (
                                                                            <>
                                                                            
                                                                             <div key={t} className="form-check checked-primary-box checked-primary d-flex align-items-center gap-2">
                                                         <input className="form-check-input"
                                                         value={t}
                                                         checked={qrConfig?.cornersSquareOptions?.type === t ? true : false }
                                                        onChange={e => updateStyle("cornersSquareOptions.type", e.target.value)}
                                                           type="radio" hidden name="CornerOptions" id={`CornerOptions-${index + 1}`}
                                                        
                                                        
                                                        
                                                        />
                                                        <label className="icon-checkbox form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for={`CornerOptions-${index + 1}`}> 
                                                            <i class={`sprite sprite-frame-${t}`}></i>
                                                           
                                                            </label>

                                                    </div>
                                                    </>
                                                       ))}  
                                                       </div>
                                                                            
                                                                        </div>
                                                                    </div>

                                                                    <p className="text-sm text-neutral-500">Color Mode</p>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="CornercolorType" id="CornercolorType"
                                                        checked={cornerColorType === "solid" ? true : false }
                                                        onChange={e => setcornerColorType("solid")} 
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="CornercolorType"> Solid Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="CornercolorType" id="CornercolorType"
                                                        checked={cornerColorType === "gradient" ? true : false }
                                                        onChange={e => setcornerColorType("gradient")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="CornercolorType"> Gradient Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    { cornerColorType === "solid" && (
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="CornerSolidColor"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"

                                                        >
                                                            Color
                                                        </label>
                                                        <input
                                                            type="color"
                                                            className="form-control radius-8"
                                                            id="CornerSolidColor"
                                                            value={qrConfig?.cornersSquareOptions?.gradient?.colorStops[0]?.color ? qrConfig?.cornersSquareOptions?.gradient?.colorStops[0]?.color : qrConfig?.dotsOptions?.color}
                                                                                    
                                                                                    onChange={e => {
                                                                                        updateStyle(`cornersSquareOptions.gradient.colorStops[0].color`, e.target.value); 
                                                                                        updateStyle(`cornersSquareOptions.gradient.colorStops[1].color`, e.target.value);
                                                                                        updateStyle(`cornersSquareOptions.gradient.colorStops[2].color`, e.target.value);
                                                                                    }}
                                                        />
                                                    </div>
                                                    )}
                                                    { cornerColorType === "gradient" && (
                                                    <div className="row">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="CornerGradientColorType"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Type
                                                                </label>
                                                                <select
                                                                    className="form-control radius-8 form-select"
                                                                    id="CornerGradientColorType"
                                                                    value={qrConfig?.cornersSquareOptions?.gradient?.type}
                                                                   onChange={e => updateStyle("cornersSquareOptions.gradient.type", e.target.value)}
                                                                >

                                                                    <option>linear</option>
                                                                    <option>radial</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="CornerGradientColorAngel"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Angel
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    min="0"

                                                                    className="form-control radius-8"
                                                                    id="CornerGradientColorAngel"
                                                                    value={qrConfig?.cornersSquareOptions?.gradient?.rotation ? qrConfig?.cornersSquareOptions?.gradient?.rotation : 0}
                                                                   onChange={e => updateStyle("cornersSquareOptions.gradient.rotation", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        {gradientColor?.colorStops?.map((t, index) => (
                                                            <>
                                                        <div key={t?.color} className="col-xxl-4 col-xl-4 col-lg-4">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor={`CornerGradientColor${index}`}
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Color & Offset
                                                                </label>
                                                                <input
                                                                    type="color"
                                                                    className="form-control radius-8"
                                                                    id={`CornerGradientColor${index}`}
                                                                    value={qrConfig?.cornersSquareOptions?.gradient?.colorStops[index]?.color ? qrConfig?.cornersSquareOptions?.gradient?.colorStops[index]?.color  : (qrConfig?.cornersSquareOptions?.color ? qrConfig?.cornersSquareOptions?.color : t?.color)}
                                                                   onChange={e => updateStyle(`cornersSquareOptions.gradient.colorStops[${index}].color`, e.target.value)}
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="0" 
                                                                    max="1"
                                                                    step="0.01"
                                                                    className="form-range radius-8 mt-3"
                                                                    id={`CornerGradientColoroffset${index}`}
                                                                    value={qrConfig?.cornersSquareOptions?.gradient?.colorStops[index]?.offset ? qrConfig?.cornersSquareOptions?.gradient?.colorStops[index]?.offset  : (qrConfig?.cornersSquareOptions?.offset ? qrConfig?.cornersSquareOptions?.offset : t?.offset)}
                                                                   onChange={e => updateStyle(`cornersSquareOptions.gradient.colorStops[${index}].offset`, e.target.value)}
                                                                   placeholder="Offset"
                                                                />
                                                                {qrConfig?.cornersSquareOptions?.gradient?.colorStops[index]?.offset ? qrConfig?.cornersSquareOptions?.gradient?.colorStops[index]?.offset  : (qrConfig?.cornersSquareOptions?.offset ? qrConfig?.cornersSquareOptions?.offset : t?.offset)}
                                                            </div>
                                                        </div>
                                                        </>
                                                        ))}
                                                       
                                                    </div>
                                                    )}
                                                </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#cornerDotStyle"
                                                                aria-expanded="false"
                                                                aria-controls="cornerDotStyle"
                                                            >
                                                                Corner Dot Style
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="cornerDotStyle"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                <div className="row">
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                                        <div className="mb-20">
                                                                            <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                                                Type:
                                                                            </label>
                                                                            <div className="d-flex justify-content-between">
                                                                           {cornerDotTypes.map((t, index) => (
                                                                            <>
                                                                            
                                                                             <div key={t} className="form-check checked-primary-box checked-primary d-flex align-items-center gap-2">
                                                         <input className="form-check-input"
                                                         value={t}
                                                         checked={qrConfig?.cornersDotOptions?.type === t ? true : false }
                                                        onChange={e => updateStyle("cornersDotOptions.type", e.target.value)}
                                                           type="radio" hidden name="CornerDotOptions" id={`CornerDotOptions-${index + 1}`}
                                                        
                                                        
                                                        
                                                        />
                                                        <label className="icon-checkbox form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for={`CornerDotOptions-${index + 1}`}> 
                                                            <i class={`sprite sprite-ball-${t}`}></i>
                                                           
                                                            </label>

                                                    </div>
                                                    </>
                                                       ))}  
                                                       </div>
                                                                            
                                                                        </div>
                                                                    </div>

                                                                    <p className="text-sm text-neutral-500">Color Mode</p>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="CornerDotcolorType" id="CornerDotcolorType"
                                                        checked={cornerDotColorType === "solid" ? true : false }
                                                        onChange={e => setcornerDotColorType("solid")} 
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="CornerDotcolorType"> Solid Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="CornerDotcolorType" id="CornerDotcolorType"
                                                        checked={cornerDotColorType === "gradient" ? true : false }
                                                        onChange={e => setcornerDotColorType("gradient")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="CornerDotcolorType"> Gradient Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    { cornerDotColorType === "solid" && (
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="CornerDotSolidColor"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"

                                                        >
                                                            Color
                                                        </label>
                                                        <input
                                                            type="color"
                                                            className="form-control radius-8"
                                                            id="CornerDotSolidColor"
                                                            value={qrConfig?.cornersDotOptions?.gradient?.colorStops[0]?.color ? qrConfig?.cornersDotOptions?.gradient?.colorStops[0]?.color : qrConfig?.dotsOptions?.color}
                                                                                    
                                                                                    onChange={e => {
                                                                                        updateStyle(`cornersDotOptions.gradient.colorStops[0].color`, e.target.value); 
                                                                                        updateStyle(`cornersDotOptions.gradient.colorStops[1].color`, e.target.value);
                                                                                        updateStyle(`cornersDotOptions.gradient.colorStops[2].color`, e.target.value);
                                                                                    }}
                                                        />
                                                    </div>
                                                    )}
                                                    { cornerDotColorType === "gradient" && (
                                                    <div className="row">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="CornerDotGradientColorType"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Type
                                                                </label>
                                                                <select
                                                                    className="form-control radius-8 form-select"
                                                                    id="CornerDotGradientColorType"
                                                                    value={qrConfig?.cornersDotOptions?.gradient?.type}
                                                                   onChange={e => updateStyle("cornersDotOptions.gradient.type", e.target.value)}
                                                                >

                                                                    <option>linear</option>
                                                                    <option>radial</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="CornerDotGradientColorAngel"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Angel
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    min="0"

                                                                    className="form-control radius-8"
                                                                    id="CornerDotGradientColorAngel"
                                                                    value={qrConfig?.cornersDotOptions?.gradient?.rotation ? qrConfig?.cornersDotOptions?.gradient?.rotation : 0}
                                                                   onChange={e => updateStyle("cornersDotOptions.gradient.rotation", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        {gradientColor.colorStops.map((t, index) => (
                                                            <>
                                                        <div key={t?.color} className="col-xxl-4 col-xl-4 col-lg-4">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor={`CornerDotGradientColor${index}`}
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Color & Offset
                                                                </label>
                                                                <input
                                                                    type="color"
                                                                    className="form-control radius-8"
                                                                    id={`CornerDotGradientColor${index}`}
                                                                    value={qrConfig?.cornersDotOptions?.gradient?.colorStops[index]?.color ? qrConfig?.cornersDotOptions?.gradient?.colorStops[index]?.color  : (qrConfig?.cornersDotOptions?.color ? qrConfig?.cornersDotOptions?.color : t?.color)}
                                                                   onChange={e => updateStyle(`cornersDotOptions.gradient.colorStops[${index}].color`, e.target.value)}
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="0" 
                                                                    max="1"
                                                                    step="0.01"
                                                                    className="form-range radius-8 mt-3"
                                                                    id={`CornerDotGradientColoroffset${index}`}
                                                                    value={qrConfig?.cornersDotOptions?.gradient?.colorStops[index]?.offset ? qrConfig?.cornersDotOptions?.gradient?.colorStops[index]?.offset  : (qrConfig?.cornersDotOptions?.offset ? qrConfig?.cornersDotOptions?.offset : t?.offset)}
                                                                   onChange={e => updateStyle(`cornersDotOptions.gradient.colorStops[${index}].offset`, e.target.value)}
                                                                   placeholder="Offset"
                                                                />
                                                                {qrConfig?.cornersDotOptions?.gradient?.colorStops[index]?.offset ? qrConfig?.cornersDotOptions?.gradient?.colorStops[index]?.offset  : (qrConfig?.cornersDotOptions?.offset ? qrConfig?.cornersDotOptions?.offset : t?.offset)}
                                                            </div>
                                                        </div>
                                                        </>
                                                        ))}
                                                       
                                                    </div>
                                                    )}
                                                </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#Backgroundoptions"
                                                                aria-expanded="false"
                                                                aria-controls="Backgroundoptions"
                                                            >
                                                                Background
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="Backgroundoptions"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                <div className="row">
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                                        <div className="form-switch switch-primary d-flex align-items-center gap-3 mb-20 mt-3">
                                                                            <input 
                                                                            className="form-check-input" 
                                                                            type="checkbox" role="switch" 
                                                                            id="backgroundenabled" 
                                                                            checked={qrConfig?.backgroundOptions ? true : false}
                                                                            />
                                                                                <label className="form-check-label line-height-1 fw-medium text-secondary-light" 
                                                                                for="backgroundenabled">Enabled</label>
                                                                        </div>
                                                                        <div className="row">
                                                                             <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                       <div className="mb-20">
                                                    <label
                                                        htmlFor="Roundness"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Roundness
                                                    </label>
                                                    <input
                                                                    type="number"
                                                                    min="0"
                                                                    max="1"
                                                                    step="0.01"
                                                                    className="form-control radius-8"
                                                                    id="Roundness"
                                                                    value={qrConfig?.backgroundOptions?.round}
                                                                   onChange={e => updateStyle("backgroundOptions.round", e.target.value)}
                                                                />
                                                                       </div>
                                                                       </div>
                                                                       <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                                       <div className="mb-20">
                                                    <label
                                                        htmlFor="backgroundOptionsMargin"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Margin
                                                    </label>
                                                    <input
                                                                    type="number"
                                                                    min="0"
                                                                    step="0.1"
                                                                    className="form-control radius-8"
                                                                    id="backgroundOptionsMargin"
                                                                    value={qrConfig?.backgroundOptions?.margin}
                                                                   onChange={e => updateStyle("backgroundOptions.margin", e.target.value)}
                                                                />
                                                                       </div>
                                                                       </div>
                                                                       </div>
                                                                    </div>

                                                                    <p className="text-sm text-neutral-500">Color Mode</p>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="radio" id="backgroundColorType"
                                                        checked={backgroundColorType === "solid" ? true : false }
                                                        onChange={e => setbackgroundColorType("solid")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="backgroundColorType"> Solid Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="radio" id="backgroundColorType"
                                                        checked={backgroundColorType === "gradient" ? true : false }
                                                        onChange={e => setbackgroundColorType("gradient")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="backgroundColorType"> Gradient Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    { backgroundColorType === "solid" && (
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="backgroundSolidColor"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"

                                                        >
                                                            Color
                                                        </label>
                                                        <input
                                                            type="color"
                                                            className="form-control radius-8"
                                                            id="backgroundSolidColor"
                                                            value={qrConfig?.backgroundOptions?.gradient?.colorStops[0]?.color ? qrConfig?.backgroundOptions?.gradient?.colorStops[0]?.color : qrConfig?.backgroundOptions?.color}
                                                                                    
                                                                                    onChange={e => {
                                                                                        updateStyle(`backgroundOptions.gradient.colorStops[0].color`, e.target.value); 
                                                                                        updateStyle(`backgroundOptions.gradient.colorStops[1].color`, e.target.value);
                                                                                        updateStyle(`backgroundOptions.gradient.colorStops[2].color`, e.target.value);
                                                                                    }}
                                                        />
                                                    </div>
                                                    )}
                                                    { backgroundColorType === "gradient" && (
                                                    <div className="row">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="backgroundGradientColorType"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Type
                                                                </label>
                                                                <select
                                                                    className="form-control radius-8 form-select"
                                                                    id="backgroundGradientColorType"
                                                                    value={qrConfig?.backgroundOptions?.gradient?.type}
                                                                   onChange={e => updateStyle("backgroundOptions.gradient.type", e.target.value)}
                                                                >

                                                                    <option>linear</option>
                                                                    <option>radial</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="backgroundGradientColorAngel"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Angel
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    className="form-control radius-8"
                                                                    id="backgroundGradientColorAngel"
                                                                    value={qrConfig?.backgroundOptions?.gradient?.rotation}
                                                                   onChange={e => updateStyle("backgroundOptions.gradient.rotation", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        {gradientColor.colorStops.map((t, index) => (
                                                            <>
                                                        <div key={t?.color} className="col-xxl-4 col-xl-4 col-lg-4">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor={`backgroundGradientColor${index}`}
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Color & Offset
                                                                </label>
                                                                <input
                                                                    type="color"
                                                                    className="form-control radius-8"
                                                                    id={`backgroundGradientColor${index}`}
                                                                    value={qrConfig?.backgroundOptions?.gradient?.colorStops[index]?.color ? t?.color  : qrConfig?.backgroundOptions?.color}
                                                                   onChange={e => updateStyle(`backgroundOptions.gradient.colorStops[${index}].color`, e.target.value)}
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="0" 
                                                                    max="1"
                                                                    step="0.01"
                                                                    className="form-range radius-8 mt-3"
                                                                    id={`backgroundGradientColoroffset${index}`}
                                                                    value={t?.offset}
                                                                   onChange={e => updateStyle(`backgroundOptions.gradient.colorStops[${index}].offset`, e.target.value)}
                                                                   placeholder="Offset"
                                                                />
                                                                {t?.offset}
                                                            </div>
                                                        </div>
                                                        </>
                                                        ))}
                                                       
                                                    </div>
                                                    )}
                                                </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#imageoptions"
                                                                aria-expanded="false"
                                                                aria-controls="imageoptions"
                                                            >
                                                                Image
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="imageoptions"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                <div className="row">
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                                     
                                                                        <div className="row">
                                                                            <div className="mb-20 mt-3">
                                                                               
                                        <div className="upload-image-wrapper d-flex align-items-center gap-3">
                                            {/* Image preview section */}
                                            {qrConfig?.image ? (
                                                <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                                                    <button
                                                        type="button"
                                                        onClick={removeImage}
                                                        className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                                                        aria-label="Remove uploaded image"
                                                    >
                                                        <Icon
                                                            icon="radix-icons:cross-2"
                                                            className="text-xl text-danger-600"
                                                        ></Icon>
                                                    </button>
                                                    <img
                                                        id="uploaded-img__preview"
                                                        className="w-100 h-100 object-fit-cover"
                                                        src={qrConfig?.image}
                                                        alt="Preview"
                                                    />
                                                </div>
                                            ) : (
                                                <label
                                                    className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                                    htmlFor="upload-file"
                                                >
                                                    <Icon
                                                        icon="solar:camera-outline"
                                                        className="text-xl text-secondary-light"
                                                    ></Icon>
                                                    <span className="fw-semibold text-secondary-light">Upload</span>
                                                </label>
                                            )}

                                            {/* Always render the input, but hide it */}
                                            <input
                                                id="upload-file"
                                                type="file"
                                                onChange={handleLogoUpload}
                                                hidden
                                                ref={fileInputRef}
                                                accept="image/*"
                                            />
                                        </div>
                                                                            </div>

                                                                             <div className="col-xxl-4 col-xl-4 col-lg-4">
                                                                       <div className="mb-20">
                                                    <label
                                                        htmlFor="imagemode"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Mode
                                                    </label>
                                                    <select
                                                                                className="form-control radius-8 form-select"
                                                                                id="imagemode"
                                                                                value={qrConfig?.imageOptions?.mode}
                                                                                onChange={e => updateStyle("imageOptions.mode", e.target.value)}
                                                                            >
                                                                                {imageMode.map(t => (
                                                                                    <option key={t}>{t}</option> 
                                                                                ))}
                                                                            </select>
                                                                       </div>
                                                                       </div>
                                                                       <div className="col-xxl-4 col-xl-4 col-lg-4">
                                                                       <div className="mb-20">
                                                    <label
                                                        htmlFor="ImageSize"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Image Size
                                                    </label>
                                                    <input
                                                                    type="number"
                                                                    min="0"
                                                                    step="0.01"
                                                                    max="1"
                                                                    className="form-control radius-8"
                                                                    id="ImageSize"
                                                                    value={qrConfig?.imageOptions?.imageSize}
                                                                   onChange={e => updateStyle("imageOptions.imageSize", e.target.value)}
                                                                />
                                                                       </div>
                                                                       </div>
                                                                       <div className="col-xxl-4 col-xl-4 col-lg-4">
                                                                       <div className="mb-20">
                                                    <label
                                                        htmlFor="imageOptionsMargin"
                                                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                    >
                                                        Margin
                                                    </label>
                                                    <input
                                                                    type="number"
                                                                    min="0"
                                                                    step="0.1"
                                                                    className="form-control radius-8"
                                                                    id="imageOptionsMargin"
                                                                    value={qrConfig?.imageOptions?.margin}
                                                                   onChange={e => updateStyle("imageOptions.margin", e.target.value)}
                                                                />
                                                                       </div>
                                                                       </div>
                                                                       </div>
                                                                    </div>
                                                  {qrConfig?.imageOptions?.mode === "background" && (
                                                    <>
                                                  <p className="text-sm text-neutral-500">Color Mode</p>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="imageDotFillColorType" id="imageDotFillColorType"
                                                        checked={imageDotFillColorType === "solid" ? true : false }
                                                        onChange={e => setimageDotFillColorType("solid")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="imageDotFillColorType"> Solid Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                    <div className="form-check checked-primary d-flex align-items-center gap-2">
                                                        <input className="form-check-input" type="radio" name="imageDotFillColorType" id="imageDotFillColorType"
                                                        checked={imageDotFillColorType === "gradient" ? true : false }
                                                        onChange={e => setimageDotFillColorType("gradient")}
                                                        />

                                                        <label className="form-check-label line-height-1 fw-medium text-secondary-light"
                                                            for="imageDotFillColorType"> Gradient Color </label>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                                    { imageDotFillColorType === "solid" && (
                                                    <div className="mb-20">
                                                        <label
                                                            htmlFor="imageDotFillSolidColor"
                                                            className="form-label fw-semibold text-primary-light text-sm mb-8"

                                                        >
                                                            Color
                                                        </label>
                                                        <input
                                                            type="color"
                                                            className="form-control radius-8"
                                                            id="imageDotFillSolidColor"
                                                            value={qrConfig?.imageOptions?.fill?.gradient?.colorStops[0]?.color ? qrConfig?.imageOptions?.fill?.gradient?.colorStops[0]?.color : qrConfig?.imageOptions?.fill?.color}
                                                                                    
                                                                                    onChange={e => {
                                                                                        updateStyle(`imageOptions.fill.gradient.colorStops[0].color`, e.target.value); 
                                                                                        updateStyle(`imageOptions.fill.gradient.colorStops[1].color`, e.target.value);
                                                                                        updateStyle(`imageOptions.fill.gradient.colorStops[2].color`, e.target.value);
                                                                                    }}
                                                        />
                                                    </div>
                                                    )}
                                                    { imageDotFillColorType === "gradient" && (
                                                    <div className="row">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="imageDotFillGradientColorType"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Type
                                                                </label>
                                                                <select
                                                                    className="form-control radius-8 form-select"
                                                                    id="imageDotFillGradientColorType"
                                                                    value={qrConfig?.imageOptions?.fill?.gradient?.type}
                                                                   onChange={e => updateStyle("imageOptions.fill.gradient.type", e.target.value)}
                                                                >

                                                                    <option>linear</option>
                                                                    <option>radial</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor="imageDotFillGradientColorAngel"
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Angel
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    className="form-control radius-8"
                                                                    id="imageDotFillGradientColorAngel"
                                                                    value={qrConfig?.imageOptions?.fill?.gradient?.rotation}
                                                                   onChange={e => updateStyle("imageOptions.fill.gradient.rotation", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        {gradientColor?.colorStops?.map((t, index) => (
                                                            <>
                                                        <div key={t?.color} className="col-xxl-4 col-xl-4 col-lg-4">
                                                            <div className="mb-20">
                                                                <label
                                                                    htmlFor={`imageDotFillGradientColor${index}`}
                                                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                                                >
                                                                    Color & Offset
                                                                </label>
                                                                <input
                                                                    type="color"
                                                                    className="form-control radius-8"
                                                                    id={`imageDotFillGradientColor${index}`}
                                                                    value={qrConfig?.imageOptions?.fill?.gradient?.colorStops[index]?.color ? t?.color : qrConfig?.imageOptions?.fill?.color}
                                                                   onChange={e => updateStyle(`imageOptions.fill.gradient.colorStops[${index}].color`, e.target.value)}
                                                                />
                                                                <input
                                                                    type="range"
                                                                    min="0" 
                                                                    max="1"
                                                                    step="0.01"
                                                                    className="form-range radius-8 mt-3"
                                                                    id={`imageDotFillGradientColoroffset${index}`}
                                                                    value={t?.offset}
                                                                   onChange={e => updateStyle(`imageOptions.fill.gradient.colorStops[${index}].offset`, e.target.value)}
                                                                   placeholder="Offset"
                                                                />
                                                                {t?.offset}
                                                            </div>
                                                        </div>
                                                        </>
                                                        ))}
                                                       
                                                    </div>
                                                    )}
                                                </div>
                                                </>
                                                )}
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button
                                                                className="accordion-button text-primary-light text"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#Templates"
                                                                aria-expanded="false"
                                                                aria-controls="Templates"
                                                            >
                                                                Templates
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="Templates"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body pe-3">
                                                                  <ul className="list-group radius-8 mt-3 mb-3">
                                                                                        <li onClick={handleSwitchBackgroundQR} className="list-group-item border text-secondary-light p-16 bg-base border-bottom-0" style={{"cursor":"pointer"}}>
                    
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <span className="d-flex">
                                                                                                    <Icon icon="ci:download" className="text-xl" />
                                                                                                </span>
                                                                                                 Backgrpund Logo {"(Circle)"}
                                                                                            </div>
                                                                                            
                                                                                        </li>
                                                                                        <li onClick={handleSwitchCenterLogoQR} className="list-group-item border text-secondary-light p-16 bg-base border-bottom-0" style={{"cursor":"pointer"}}>
                    
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <span className="d-flex">
                                                                                                    <Icon icon="ci:download" className="text-xl" />
                                                                                                </span>
                                                                                                 Center Logo {"(Square)"}
                                                                                            </div>
                                                                                            
                                                                                        </li>
                                                                                        <li onClick={handleSwitchCenterLogoCircleQR} className="list-group-item border text-secondary-light p-16 bg-base border-bottom-0" style={{"cursor":"pointer"}}>
                    
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <span className="d-flex">
                                                                                                    <Icon icon="ci:download" className="text-xl" />
                                                                                                </span>
                                                                                                 Center Logo {"(Circle)"}
                                                                                            </div>
                                                                                            
                                                                                        </li>
                                                                                        <li onClick={handleSwitchDefaultQR} className="list-group-item border text-secondary-light p-16 bg-base border-bottom-0" style={{"cursor":"pointer"}}>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <span className="d-flex">
                                                                                                    <Icon icon="ci:download" className="text-xl" />
                                                                                                </span>
                                                                                                Reset
                                                                                            </div>
                                                                                        </li>
                                                                                        
                                                                                       
                                                                                       
                                                                                      
                                                                                    </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            
                                           
                                        </div>

                                  

                                      

                                        


                                        <div className="d-flex align-items-center justify-content-center gap-3">
                                            <button
                                                type="button"
                                                className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xxl-6 col-xl-5 col-lg-5">

                            <div className="card-trans border sticky-top" id="pricesticky" style={{"top":"70px"}} > 
                                <div className="card-body text-center " style={{"padding-bottom":"0"}} >
                                    <div className="svg-wr" ref={qrRef}></div>
                                    <button onClick={() => setShowModal(true)}
                                        type="button"
                                        className="btn btn-primary-600 px-12 py-6 text-sm mt-1">

                                        Add New Source <Icon
                                            icon="material-symbols:download-rounded"
                                            className="icon text-xl line-height-1"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-backdrop fade show"></div>
            )}

            {/* Modal Add Event  */}
            <div className={`modal ${showModal ? 'fade show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>



                <div className="modal-dialog modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="AddSourceModalLabel">
                                Download
                            </h1>
                            <button onClick={() => setShowModal(false)}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body p-24 text-center">
                            <div className="d-flex align-items-center gap-3">
                                <div className=''>
                                    <input type="number" min="30" className='form-control' placeholder="Width" 
                                    value={qrWidth || "30"}
                                        onChange={e => setqrWidth(e.target.value < 30 ? 30 : e.target.value)}
                                    />

                                </div>
                                <div className=''>
                                    X
                                </div>
                                <div className=''>
                                    <input type="number" min="30" className='form-control' placeholder="Height" value={qrHeight || "30"}
                                        onChange={e => setqrHeight( e.target.value < 30 ? 30 : e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="dropdown mt-3">
                                <button className="btn btn-primary-600 not-active px-12 py-6 text-sm dropdown-toggle toggle-icon"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"> Download </button>
                                <ul className="dropdown-menu" >
                                    {extensions.map(t => (
                                        <li onClick={() => downloadQR(qrConfig?.qrname, t, qrWidth,qrHeight)}
                                            className="dropdown-item px-16 py-8 rounded text-secondary-light 
                                                    bg-hover-neutral-200 text-hover-neutral-900"
                                            key={t}>{t} </li>
                                    ))}

                                   

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal View Event */}
        </>

    );
};

export default AddQRCodeLayer;