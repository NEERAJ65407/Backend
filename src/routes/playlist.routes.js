import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middelware.js';
import {createPlaylist, getUserPlaylists, getPlaylistById, addVideoToPlaylist,removeVideoFromPlaylist, deletePlaylist,updatePlaylist,togglePublishStatus} from '../controllers/playlist.controller.js';

const router = Router();

router.use(verifyJWT);

router.route("/").post(createPlaylist)

router
    .route("/:playlistId")
    .get(getPlaylistById)
    .patch(updatePlaylist)
    .delete(deletePlaylist);

router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist);
router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist);
router.route("/toggle-publish-status/:playlistId").post(togglePublishStatus);
router.route("/user/:userId").get(getUserPlaylists);

export default router