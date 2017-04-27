'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';

import Camera from 'react-native-camera';

export default class BadInstagramCloneApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[Click]</Text>
        </Camera>
      </View>
    );
  }

  uploadPicture(PicturePath) {
    // upload picture
    var imagedata = new FormData();
    imagedata.append('image', {uri: PicturePath, name: 'new.jpg', type: 'image/jpg'});
    const config = {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data;',
           //'Authorization': 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH',
         },
         body: imagedata,
        };

    if(PicturePath)
    {
      fetch("http://10.117.173.109/image/restapi/post", config)
      .then((responseData) => {
          console.log("###############responseData is ")
          console.log(responseData);
      })
      .catch(err => {
        console.log(err);
      });
    }
    else{
      console.log("PicturePath is empty yet!")
    }

  }

  takePicture() {
    var PicturePath = "";
    // capture picture
    const options = {};
    //options.target = Camera.constants.CaptureTarget.disk;
    this.camera.capture({metadata: options})
      .then((data) => {
        console.log('#########I captured one Picture. ' + data.path);
        PicturePath = data.path;
        Alert.alert('Picture taken done.');
        // upload picture in then!
        this.uploadPicture(PicturePath);  
      })
      .catch(err => console.error(err));

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

