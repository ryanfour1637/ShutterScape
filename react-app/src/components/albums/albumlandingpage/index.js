import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DeleteAlbumModel from "../deletealbummodel";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";


export default function AlbumLandingPage() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const getAlbums = useSelector((state) => state.session.user.albums)
    const allAlbums = [...getAlbums]
    
    
    
    
    return (<div>
         <OpenModalButton
                     buttonText="Delete"
                     modalComponent={<DeleteAlbumModel id={id}/>}
                  />
    </div>)
}