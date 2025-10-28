import React from "react";
import MasterLayout from "../../masterLayout/MasterLayout";
import Breadcrumb from "../Breadcrumb";
import QRCodeListLayer from "./QRCodeListLayer";



const QRCodeListPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="QR Codes List" />

        {/* FrontsListLayer */}
        <QRCodeListLayer />

      </MasterLayout>

    </>
  );
};

export default QRCodeListPage; 
