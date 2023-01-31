import React, { useCallback, useState } from "react";
import MyGallery from "react-photo-gallery";
import photos from "./mGallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTranslation } from "react-i18next";
import { letterSpacing } from "@mui/system";

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    const { t, i18n } = useTranslation();
    return (<div>
        <MyGallery photos={photos} onClick={openLightbox} targetRowHeight={200} />
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: t(x.title)
                        }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
    </div>
    )

}
