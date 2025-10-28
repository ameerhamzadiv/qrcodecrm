import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useRef, useState } from 'react';

const CompanyLayer = () => {

 const [logoDarkPreview, setlogoDarkPreview] = useState(null);
 const fileInputlogoDarkRef = useRef(null);

const [logoLightPreview, setlogoLightPreview] = useState(null);
 const fileInputlogoLightRef = useRef(null);

const [FaviconPreview, setFaviconPreview] = useState(null);
 const fileInputFaviconRef = useRef(null);

    const handleFilelogoDarkChange = (e) => {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            setlogoDarkPreview(src);
        }
    };

    const handleFilelogoLightChange = (e) => {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            setlogoLightPreview(src);
        }
    };

    const handleFileFaviconChange = (e) => {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            setFaviconPreview(src);
        }
    };

    const removelogoDark = () => {
        setlogoDarkPreview(null);
        if (fileInputlogoDarkRef.current) {
            fileInputlogoDarkRef.current.value = "";
        }
    };

    const removelogoLight = () => {
        setlogoLightPreview(null);
        if (fileInputlogoLightRef.current) {
            fileInputlogoLightRef.current.value = "";
        }
    };

    const removeFavicon = () => {
        setFaviconPreview(null);
        if (fileInputFaviconRef.current) {
            fileInputFaviconRef.current.value = "";
        }
    };

    useEffect(() => {
        return () => {
            if (logoDarkPreview) {
                URL.revokeObjectURL(logoDarkPreview);
            }
        };
    }, [logoDarkPreview]);

    useEffect(() => {
        return () => {
            if (logoLightPreview) {
                URL.revokeObjectURL(logoLightPreview);
            }
        };
    }, [logoLightPreview]);

    useEffect(() => {
        return () => {
            if (FaviconPreview) {
                URL.revokeObjectURL(FaviconPreview);
            }
        };
    }, [FaviconPreview]);

    return (
        <div className="card h-100 p-0 radius-12 overflow-hidden">
            <style>
                {`

                .w-100-percenct{
                width: 100% !important;
                }
                
                `}
            </style>
            <div className="card-header pb-1">
            <h6>Company Settings</h6>
        </div>
            <div className="card-body p-40">
                <form action="#">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card h-100 p-0">
                                <div className="card-header border-bottom bg-base py-16 px-24">
                                    <h6 className="text-lg fw-semibold mb-0">Logo Dark</h6>
                                </div>
                                <div className="card-body p-24">
                                    <div className="upload-image-wrapper d-flex align-items-center gap-3 justify-content-center">
                                        {/* Image preview section */}
                                        {logoDarkPreview ? (
                                            <div className="uploaded-img position-relative h-40-px w-168-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                                                <button
                                                    type="button"
                                                    onClick={removelogoDark}
                                                    className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                                                    aria-label="Remove uploaded image"
                                                >
                                                    <Icon
                                                        icon="radix-icons:cross-2"
                                                        className="text-xl text-danger-600"
                                                    ></Icon>
                                                </button>
                                                <img
                                                    id="uploaded-img_logoDark_preview"
                                                    className="w-100 h-100 object-fit-cover"
                                                    src={logoDarkPreview}
                                                    alt="Preview"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <label
                                                    className="upload-file h-120-px w-100-percenct border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                                    htmlFor="upload-logoDark-file"
                                                >
                                                    <Icon
                                                        icon="solar:camera-outline"
                                                        className="text-xl text-secondary-light"
                                                    ></Icon>
                                                    <span className="fw-semibold text-secondary-light">Upload</span>
                                                    <small>168X40</small>
                                                </label>

                                            </>
                                        )}

                                        {/* Always render the input, but hide it */}
                                        <input
                                            id="upload-logoDark-file"
                                            type="file"
                                            onChange={handleFilelogoDarkChange}
                                            hidden
                                            ref={fileInputlogoDarkRef}
                                            accept="image/*" // Optional: restrict to image files
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 p-0">
                                <div className="card-header border-bottom bg-base py-16 px-24">
                                    <h6 className="text-lg fw-semibold mb-0">Logo Light</h6>
                                </div>
                                <div className="card-body p-24">
                                    <div className="upload-image-wrapper d-flex align-items-center gap-3 justify-content-center">
                                        {/* Image preview section */}
                                        {logoLightPreview ? (
                                            <div className="uploaded-img position-relative h-40-px w-168-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                                                <button
                                                    type="button"
                                                    onClick={removelogoLight}
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
                                                    src={logoLightPreview}
                                                    alt="Preview"
                                                />
                                            </div>
                                        ) : (
                                            <label
                                                className="upload-file h-120-px w-100-percenct border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                                htmlFor="upload-logoLight-file"
                                            >
                                                <Icon
                                                    icon="solar:camera-outline"
                                                    className="text-xl text-secondary-light"
                                                ></Icon>
                                                <span className="fw-semibold text-secondary-light">Upload</span>
                                                <small>168X40</small>
                                            </label>
                                        )}

                                        {/* Always render the input, but hide it */}
                                        <input
                                            id="upload-logoLight-file"
                                            type="file"
                                            onChange={handleFilelogoLightChange}
                                            hidden
                                            ref={fileInputlogoLightRef}
                                            accept="image/*" // Optional: restrict to image files
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 p-0">
                                <div className="card-header border-bottom bg-base py-16 px-24">
                                    <h6 className="text-lg fw-semibold mb-0">Favicon</h6>
                                </div>
                                <div className="card-body p-24">
                                    <div className="upload-image-wrapper d-flex align-items-center gap-3 justify-content-center">
                                        {/* Image preview section */}
                                        {FaviconPreview ? (
                                            <div className="uploaded-img position-relative h-50-px w-50-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                                                <button
                                                    type="button"
                                                    onClick={removeFavicon}
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
                                                    src={FaviconPreview}
                                                    alt="Preview"
                                                />
                                            </div>
                                        ) : (
                                            <label
                                                className="upload-file h-120-px w-100-percenct border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                                htmlFor="upload-Favicon-file"
                                            >
                                                <Icon
                                                    icon="solar:camera-outline"
                                                    className="text-xl text-secondary-light"
                                                ></Icon>
                                                <span className="fw-semibold text-secondary-light">Upload</span>
                                                <small>50X50</small>
                                            </label>
                                        )}

                                        {/* Always render the input, but hide it */}
                                        <input
                                            id="upload-Favicon-file"
                                            type="file"
                                            onChange={handleFileFaviconChange}
                                            hidden
                                            ref={fileInputFaviconRef}
                                            accept="image/*" // Optional: restrict to image files
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card  d-flex flex-row mt-3">
                            <div className="col-sm-6 p-3">
                                <div className="gy-5 align-items-center d-flex gap-2">
                                    <label style={{ "max-width": "80px", width: "100%" }}
                                        htmlFor="title"
                                        className="form-label fw-semibold text-primary-light text-sm mb-0"
                                    >
                                        Title Text
                                    </label>

                                    <input type="text" id="title" className="form-control radius-8" placeholder="Enter Title Text" />

                                </div>
                            </div>
                            <div className="col-sm-6 p-3">
                                <div className="gy-5 align-items-center d-flex gap-2">
                                    <label style={{ "max-width": "80px", width: "100%" }}
                                        htmlFor="footer"
                                        className="form-label fw-semibold text-primary-light text-sm mb-0"
                                    >
                                        Footer Text
                                    </label>

                                    <input type="text" id="footer" className="form-control radius-8" placeholder="Enter Footer Text" />

                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 mt-3">
                            <div className="mb-20">
                                <label
                                    htmlFor="name"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    Full Name <span className="text-danger-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="name"
                                    placeholder="Enter Full Name"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6 mt-3">
                            <div className="mb-20">
                                <label
                                    htmlFor="email"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    Email <span className="text-danger-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control radius-8"
                                    id="email"
                                    placeholder="Enter email address"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-20">
                                <label
                                    htmlFor="number"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="number"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-20">
                                <label
                                    htmlFor="Website"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    {" "}
                                    Website
                                </label>
                                <input
                                    type="url"
                                    className="form-control radius-8"
                                    id="Website"
                                    placeholder="Website URL"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-20">
                                <label
                                    htmlFor="country"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    Country <span className="text-danger-600">*</span>{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="country"
                                    placeholder="Enter country"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-20">
                                <label
                                    htmlFor="city"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    City <span className="text-danger-600">*</span>{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="city"
                                    placeholder="Enter city"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-20">
                                <label
                                    htmlFor="state"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    State <span className="text-danger-600">*</span>{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="state"
                                    placeholder="Enter state"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-20">
                                <label
                                    htmlFor="zip"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    {" "}
                                    Zip Code <span className="text-danger-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="zip"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="mb-20">
                                <label
                                    htmlFor="address"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    {" "}
                                    Address* <span className="text-danger-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control radius-8"
                                    id="address"
                                    placeholder="Enter Your Address"
                                />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                            <button
                                type="reset"
                                className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8"
                            >
                                Cancle
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8"
                            >
                                Save Change
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CompanyLayer;