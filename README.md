# Shutterscape

Shutterscape is a clone of the photo-sharing website Flickr, which allows users to create photo posts, create photo albums of grouped photo posts, leave comments on photo posts, and mark desired posts as a "Favorite" to be stored in a collection on their user profile.

Try it [here:](https://shutterscape.onrender.com/)
1. Click on the Menu icon in the upper-right and select `Log In`
2. Click on the `Demo User` button

### Technology Used
* Python
* Flask
* React.js
* Redux
* Docker
* Amazon Web Services (AWS)
* Render

## Screenshots
### Your Photos Page
![YourPhotos](https://github.com/ryanfour1637/ShutterScape/assets/115580381/802f91fa-a8d5-42c9-934d-394d1cb33ea3)

### Album Photos
![PhotosInAlbum](https://github.com/ryanfour1637/ShutterScape/assets/115580381/48966622-11bc-48e2-8695-75d7b7b071df)

### Post Details
<img width="888" alt="PostDetails" src="https://github.com/ryanfour1637/ShutterScape/assets/115580381/2618cfd2-f4ec-47e7-a918-372abbf014ba">

## Technical Details

Shutterscape allows users to create photo posts, create photo albums of grouped photo posts, leave comments on photo posts, and mark desired posts as a "Favorite" to be stored in a collection on their user profile.

Each user is connected to these features by a User class that contains `my_post_id`, `my_album_id`, `my_comment_id`, and `my_fave_id`, which establishes database relationships to those corresponding tables.

![image](https://github.com/ryanfour1637/ShutterScape/assets/115580381/e68ca717-592f-47be-aee3-e6bae014153f)

Posts are filtered and randomized on the back-end using Python's `random.sample()` function, ensuring a unique "Explore" experience for each user. All database query results are flattened in the Redux Reducer, making the access of photo posts, albums, comments, and favorites an O(1) time operation.

![image](https://github.com/ryanfour1637/ShutterScape/assets/115580381/adfa3c4d-65c0-4d33-b838-116413329a9d)


### Features
* Create / read / update / delete Photo Posts
* Create / read / update / delete Photo Albums
* Create / read / update / delete Comments on Photo Posts
* "Favorite" (and un-"Favorite") any Photo Post to be stored in your profile
* See Photo Posts and Comments from other users

### Future Features
* Search Bar
* User Profile customization
  * Update profile photo
  * Update banner photo

### Components
* Albums
 * AllAlbums
 * CreateAlbum
 * DeleteAlbum
 * AlbumPage
* Comments
  * CreateComment
  * DeleteComment
  * UpdateComment
* Favorites
* Footer
* Home
* LoginFormModal
* SignupFormModal
* Navigation
* OpenModalButton
* Posts
  * CreatePost
  * DeletePost
  * GetPost
  * PostDetails
  * UpdatePost
* UserBanner

### Installation
1. Download the [repo](https://github.com/ryanfour1637/ShutterScape)
2. Install the dependencies
```
pipenv install -r requirements.txt
```
3. Create a .env with proper settings for your development environment. Make sure to include settings for your AWS Bucket, Key, and Secret Key!
4. Open a terminal, migrate/seed your database, and run your Flask app
```
pipenv shell
flask db upgrade
flask seed all
flask run
```
5. See the README file in the `react-app` directory to run the React App in development

# API Endpoints
## HTML API

### Root
 * `GET /`

### Session
 * `POST /login`
 * `POST /signup`

### Posts
 * `GET /posts/new`
 * `GET /posts/current`
 * `GET /posts/:id`
 * `GET /favorites`

## Flask Blueprint

### Users
 * `GET /api/users/`
 * `GET /api/users/<int:id>`

### Posts
 * `GET /api/posts/all`
 * `GET /api/posts/current`
 * `GET /api/posts/<int:id>`
 * `GET /api/posts/new`
 * `POST /api/posts/new`
 * `PUT /api/posts/update/<int:id>`
 * `DELETE /api/posts/delete/<int:id>`
 * `POST /api/posts/<int:id>/comments`
 * `PUT /api/posts/<int:id>/comments`
 * `GET /api/posts/no_album`
 * `POST /api/posts/no_album`

### Comments
 * `GET /api/comments/all`
 * `GET /api/comments`
 * `POST /api/comments/new/posts/<int:id>`
 * `PUT /api/comments/<int:id>/update/posts`
 * `DELETE /api/comments/<int:id>`

### Albums
 * `POST /api/albums/new`
 * `GET /api/albums/all`
 * `DELETE /api/albums/<int:id>`

### Favorites
* `GET /api/favorites/`
* `POST /api/favorites/<int:id>`
* `DELETE /api/favorites/<int:id>`

# Redux Stores

### Session
 * Actions:
   * `SET_USER`
   * `REMOVE_USER`
  
 ### Posts
  * Actions:
    * `GET_ALL_POSTS`
    * `GET_POST_DETAILS`
    * `GET_NINE_POSTS`
    * `DELETE_POST`

  ### Comments
   * Actions:
     * `READ_COMMENTS`
     * `ADD_COMMENT`
     * `DELETE_COMMENT`

  ### Albums
   * Actions:
     * `GET_ALBUMS`
     * `ADD_ONE_ALBUM`
     * `DELETE_ALBUM`

  ### Favorites
   * Actions:
     * `GET_ONE_FAVORITE`
     * `GET_ALL_FAVORIES`
     * `DELETE_FAVORITE`
