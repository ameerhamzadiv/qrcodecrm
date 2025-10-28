import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import "datatables.net-responsive-dt"; // For responsiveness
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import 'jszip';
import JSZip from 'jszip';
import 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';
window.JSZip = JSZip; // ✅ This is required 


const QRCodeListLayer = () => {

    useEffect(() => {
        const isMobile = window.innerWidth < 768; // adjust breakpoint as needed
        const table = $('#dataTable').DataTable({
            pageLength: 10,
            dom: "<'d-flex justify-content-between align-items-center mb-3'Bf>rt<'d-flex justify-content-between align-items-center mt-3'lip>",
            buttons: [
                {
                    extend: 'copy',
                    exportOptions: {
                        columns: ':not(:last-child)' // Exclude last column (Action)
                    }
                },
                {
                    extend: 'csv',
                    exportOptions: {
                        columns: ':not(:last-child)'
                    }
                },
                {
                    extend: 'excel',
                    exportOptions: {
                        columns: ':not(:last-child)'
                    }
                },
                {
                    extend: 'pdf',
                    exportOptions: {
                        columns: ':not(:last-child)'
                    }
                },
                {
                    extend: 'print',
                    exportOptions: {
                        columns: ':not(:last-child)'
                    }
                }
            ], // Available export buttons
            responsive: isMobile ? true : false,

        });


        // 🔽 Custom Dropdown Filter
        $('#statusFilter').on('change', function () {
            const val = $(this).val(); // 'Paid' or 'Pending' or ''
            table.column(8).search(val).draw(); // 3 = status column index
        });

        return () => {
            table.destroy(true);
        };
    }, []);

    return (
        <>

            <style>
                {`

            /* Style the search input */
div.dt-container .dt-search input {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 14px;
    margin-left: 8px;
    outline: none;
    transition: border-color 0.2s ease-in-out;
}

div.dt-container .dt-search input:focus {
    border-color: #196db3;
}

/* Style the length dropdown */
.dataTables_length select {
    border-radius: 6px;
    padding: 4px 10px;
    border: 1px solid #ccc;
    font-size: 14px;
}

/* Export buttons */
div.dt-buttons .dt-button {
        background-color: var(--primary-600);
    background: var(--primary-600);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

div.dt-buttons > .dt-button:hover:not(.disabled) {
    background-color: var(--primary-700);
    border:none;
}

/* Pagination */
div.dt-container select.dt-input {
    border-radius: 4px;
    padding: 6px 6px;
    border: 1px solid #dee2e6;
    transition: background-color 0.2s ease;
}

div.dt-container select.dt-input.current {
    background-color: #007bff;
    color: white !important;
    border-color: #007bff;
}



            
            `}
            </style> 

            <div className="card basic-data-table">

                <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <h5 className="card-title mb-0">QR Codes List</h5>
                    <div className="d-flex flex-wrap align-items-center gap-3">
                       
                      
                        <Link to="/create-qrcode" className="btn btn-sm btn-primary-600">
                            <i className="ri-add-line" /> Create QR Code
                        </Link>
                    </div>
                </div>
                <div className="card-body" style={{ overflowX: 'auto' }}>

                    <table
                        className="table bordered-table mb-0"
                        id="dataTable"
                        data-page-length={10}
                    >
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="d-flex align-items-center gap-10">

                                        S.L
                                    </div>
                                </th>

                                <th scope="col">Title</th>
                                <th scope="col">Type</th>
                                 <th scope="col">Download</th>
                                <th scope="col">Date</th>

                                <th scope="col" className="text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">

                                        01
                                    </div>
                                </td>


                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Steve
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>Url: https://designcosmics.com</td>
                                <td> <button 
                                     className="btn btn-primary-600 not-active px-12 py-6 text-sm dropdown-toggle toggle-icon"
                                    type="button"> Download </button>
                                </td>
                                <td>25 Jan 2025</td>
                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <Link
                                            to="/qrcode-view"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </Link>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center gap-10">

                                        02
                                    </div>
                                </td>


                                <td>
                                    <div className="d-flex align-items-center">

                                        <div className="flex-grow-1">
                                            <span className="text-md mb-0 fw-normal text-secondary-light">
                                                Steve
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>Text: Hello there!</td>
                                <td> <button 
                                     className="btn btn-primary-600 not-active px-12 py-6 text-sm dropdown-toggle toggle-icon"
                                    type="button"> Download </button>
                                </td>
                                <td>26 Jan 2025</td>
                                <td className="text-center">
                                    <div className="d-flex align-items-center gap-10 justify-content-center">
                                        <Link
                                            to="/qrcode-view"
                                            className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="majesticons:eye-line"
                                                className="icon text-xl"
                                            />
                                        </Link>
                                        <button
                                            type="button"
                                            className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon icon="lucide:edit" className="menu-icon" />
                                        </button>
                                        <button
                                            type="button"
                                            className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                        >
                                            <Icon
                                                icon="fluent:delete-24-regular"
                                                className="menu-icon"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>






                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default QRCodeListLayer;