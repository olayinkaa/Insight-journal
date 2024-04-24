
def buildImage(){
    echo "Build docker image with dockerfile..."
    sh "docker build -t olayinka/demo-ap:react-nodejs ."
}

// push Docker Image to DockerHub Repository

def pushImage(){
    echo "Pushing docker image to docker hub repo..."
    withCredentials([usernamePassword(credentialsId: 'Docker-hub-repo', passwordVariable: 'PASS', usernamevariable: 'USER')]){
        sh "echo $PASS | docker login -u $USER --password-stdin"
        sh "docker push olayinka/demo-ap:react-nodejs"
    }
}

def deployImage(){
    
}