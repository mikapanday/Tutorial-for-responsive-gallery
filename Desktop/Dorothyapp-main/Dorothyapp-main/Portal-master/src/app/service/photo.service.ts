import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource } from '@capacitor/core';
import { ChildModel } from '../models/model/child.model';

const { Camera, Filesystem, Storage } = Plugins;


export interface Photo {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photo"
  public photoDescription: string;

  //A new class method --addNewToGallery-- which contains the core logic to take a device photo and save it to the filesystem
  // this is where I want to add description
  // first it adds to gallery and posts this on tab2
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    return capturedPhoto
  }

  //saves only when upload post is selected
  public async savePost(NewPost){
    // Save the picture and add it to photo collection
    const capturedPhoto = this.addNewToGallery();
    const savedImageFile = await this.savePicture(await capturedPhoto);
    this.photos.unshift(savedImageFile);

    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });


    // attach description look at tutorial for photo's location and use description instead. THere are similar enough to
    // interchange

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async loadSaved() {
    // Retrieve cached photo array data
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value) || [];

    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}

