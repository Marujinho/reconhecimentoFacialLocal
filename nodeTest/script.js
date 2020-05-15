// const imageLabels = []
// const auth = firebase.auth()

// auth.signInWithEmailAndPassword('aka.contato@gmail.com', 'QQgG786MuxZ92LJ')


// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser){
//         console.log('logado', firebaseUser)
//     }else{
//         console.log('nao logado')
//     }
// })

// loadLabeledImages()


// // storage.ref().child('the_flag_1').list().then(function(res){
// //
// //     res.items.forEach(function(item) {
// //         console.log('irra', item.location.path_)
// //
// //         storage.ref().child(item.location.path_).getDownloadURL().then(  (b) => {console.log(b)}  )
// //     });
// //
// //    // console.log('oba', res.items)
// // })

// // const video = document.getElementById('video')
// //
// // Promise.all([
// //   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
// //   faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
// //   faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
// //   faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
// // ]).then(startVideo)
// //
// // function startVideo() {
// //   navigator.getUserMedia(
// //     { video: {} },
// //     stream => video.srcObject = stream,
// //     err => console.error(err)
// //   )
// // }
// //
// // video.addEventListener('play', async () => {
// //   //Cria um elemento canvas a partir do video ou img q eu escolher
// //   const canvas = faceapi.createCanvasFromMedia(video)
// //   //pega as imagens e labels do banco de imagens
// //   const labeledFaceDescriptors = await loadLabeledImages()
// //
// //   const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
// //   //Insere o html
// //   document.body.append(canvas)
// //   //setta as dimensoes de altura e largura
// //   const displaySize = { width: video.width, height: video.height }
// //   //Cria um elemento canvas a partir do video ou img q eu escolher
// //   faceapi.matchDimensions(canvas, displaySize)
// //
// // var inter = setInterval(async () => {
// //       //Detecta todas faces do vid ou imagem
// //       const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
// //       //pega os tamanhos e larguras das faces detectadas
// //       const resizedDetections = faceapi.resizeResults(detections, displaySize)
// //       //Limpa os pixels do que ta 'desenhado' no canvas
// //       canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// //       //poe o quadradinho na cara
// //       faceapi.draw.drawDetections(canvas, resizedDetections)
// //
// //
// //
// //       if(detections[0]._score > 0.92) {
// //           console.log('facialDetections')
// //
// //
// //
// //
// //
// //           var detectedFaceImg = faceapi.createCanvasFromMedia(video)
// //           var detectedFaceImgContext = detectedFaceImg.getContext('2d')
// //           detectedFaceImgContext.drawImage(video, 0, 0, video.width, video.height)
// //           var container = document.getElementById('test')
// //
// //
// //           //Crio um elemento imagem novo
// //           var imgElement = new Image()
// //           //pego o src da imagem criada a partir do canvas que eu criei da face detectada
// //           var detectedFaceImgSrc = detectedFaceImg.toDataURL()
// //           //ponho nesse elemento imagem novo o src da foto com a imagem detectada
// //           imgElement.src = detectedFaceImgSrc
// //
// //           var facialDetections = await faceapi.detectAllFaces(imgElement).withFaceLandmarks().withFaceDescriptors()
// //           var resizedDetections2 = faceapi.resizeResults(facialDetections, displaySize)
// //           var results = resizedDetections2.map(d => faceMatcher.findBestMatch(d.descriptor))
// //
// //
// //           results.forEach((result, i) => {
// //
// //                 console.log('eba', resizedDetections)
// //                 const box = resizedDetections[i].box
// //                 const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
// //                 // drawBox.draw(snapshotCanvas)
// //
// //               // if(result.label != 'unknown') {
// //               //
// //               //     alert(result.label)
// //               //
// //               // } else {
// //               //
// //               //     alert('Não sei quem é você')
// //               //
// //               // }
// //           })
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //       }
// //
// //       }, 100)
// // })
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //


// function loadLabeledImages() {

//   storage.ref().child('the_flag_1').listAll().then(function(res) {

//      res.prefixes.forEach(function(folderRef) {

//          imageLabels.push(folderRef.location.path_)
//      });

//  }).catch(function(error) {

//      console.log('erro', error)

//  }).then(function() {


//    return Promise.all(

//        //aqui em baixo ta td dentro do then()
//        imageLabels.map(async label => {

//            const descriptions = []

//            var splittedLabel = label.split('/')
//            var lala = storage.ref().child('the_flag_1/' + splittedLabel[1]).listAll().then(function(r)  {
//                var photosCount = r.items.length;
//                for (let i = 1; i <= photosCount; i++) {

//                   // storage.child('images/stars.jpg').getDownloadURL()
//                   storage.ref().child('the_flag_1/' + splittedLabel[1] + '/' + i + '.jpg').getDownloadURL().then( async (link) => {
//                       console.log('link', link)

//                       const img = await faceapi.fetchImage(link)
//                       console.log(img)
//                   })
//                    //faz a busca aqui
//                    // const img
//                    // const img = await faceapi.fetchImage(`https://marujinho.github.io/billion/labeled_images/${label}/${i}.jpg`)
//                    // const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
//                    // descriptions.push(detections.descriptor)
//                    descriptions.push('vassoura')
//                }
//            })


//            // for (let i = 1; i <= 2; i++) {
//            //   const img = await faceapi.fetchImage(`https://marujinho.github.io/billion/labeled_images/${label}/${i}.jpg`)
//            //   const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
//            //   descriptions.push(detections.descriptor)
//            // }

//            return new faceapi.LabeledFaceDescriptors(label, descriptions)
//      })
//    )

//  })//fim do then()





 //  const labels = [
 //   'Black Widow',
 //   'Captain America',
 //   'Captain Marvel',
 //   'Hawkeye',
 //   'Jim Rhodes',
 //   'Thor',
 //   'Tony Stark',
 //   'Jade Picon',
 //   'Carol Boury',
 //   'Daniel Hwang',
 //   'Xicaaaaa',
 //   'Daniel Cortez',
 //   'Freddy Mercury',
 //   'Acacio Magno'
 // ]


// }
//
//























































const video = document.getElementById('video')


Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}


video.addEventListener('play', async () => {
  //Cria um elemento canvas a partir do video ou img q eu escolher
  const canvas = faceapi.createCanvasFromMedia(video)
  //pega as imagens e labels do banco de imagens
  const labeledFaceDescriptors = await loadLabeledImages()

  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.9)
  //Insere o html
  document.body.append(canvas)
  //setta as dimensoes de altura e largura
  const displaySize = { width: video.width, height: video.height }
  //Cria um elemento canvas a partir do video ou img q eu escolher
  faceapi.matchDimensions(canvas, displaySize)



var inter = setInterval(async () => {
      //Detecta todas faces do vid ou imagem
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      //pega os tamanhos e larguras das faces detectadas
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      //Limpa os pixels do que ta 'desenhado' no canvas
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      //poe o quadradinho na cara
      faceapi.draw.drawDetections(canvas, resizedDetections)



      if(detections[0]._score > 0.92) {

       
          var detectedFaceImg = faceapi.createCanvasFromMedia(video)
          var detectedFaceImgContext = detectedFaceImg.getContext('2d')
          detectedFaceImgContext.drawImage(video, 0, 0, video.width, video.height)
          var container = document.getElementById('test')
          
          //
          //Crio um elemento imagem novo
          var imgElement = new Image()
          //pego o src da imagem criada a partir do canvas que eu criei da face detectada
          var detectedFaceImgSrc = detectedFaceImg.toDataURL()
          //ponho nesse elemento imagem novo o src da foto com a imagem detectada
          imgElement.src = detectedFaceImgSrc

          var facialDetections = await faceapi.detectAllFaces(imgElement).withFaceLandmarks().withFaceDescriptors()
          var resizedDetections2 = faceapi.resizeResults(facialDetections, displaySize)
          var results = resizedDetections2.map(d => faceMatcher.findBestMatch(d.descriptor))


          results.forEach((result, i) => {

              console.log('eba', resizedDetections)
              const box = resizedDetections[i].box
              const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })

              if(result.label != 'unknown') {

                  alert(result.label)
                  //abri porta

              } else {
                  //faz nda
                  alert('Não sei quem é você')

              }
          })

      }

      }, 100)
})












function loadLabeledImages() {

   const labels = [
    'Black Widow',
    'Captain America',
    'Captain Marvel',
    'Hawkeye',
    'Jim Rhodes',
    'Thor',
    'Tony Stark',
    'Carol Boury',
    'Daniel Hwang',
    'Xicaaaaa',
    'Daniel Cortez',
    'Freddy Mercury',
    'Acacio Magno'
  ]

   return Promise.all(

       labels.map(async label => {
           const descriptions = []
           for (let i = 1; i <= 2; i++) {

               const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/Marujinho/billion/gh-pages/labeled_images/${label}/${i}.jpg`)
               const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
               descriptions.push(detections.descriptor)

           }

           return new faceapi.LabeledFaceDescriptors(label, descriptions)
     })
   )

}
