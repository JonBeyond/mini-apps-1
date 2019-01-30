var state = {
    preprocess: null,
    postprocess: null,
    readFile: () => {
        state.preprocess = JSON.parse(document.getElementById('inputfile').value);
        viewer.render();
    },
    sendFile: () => {
        let POST = new XMLHttpRequest(); //vanilla js HTTP transfer
        POST.open('POST', 'http://127.0.0.1:3000/submit', true);
        POST.setRequestHeader('Content-type', 'application/json');
        POST.onreadystatechange = () => {
            if (POST.readyState === 4 && POST.status === 201) {
                state.getFile();
            }
        }
        POST.send(JSON.stringify(state.preprocess));

    },
    getFile: () => {
        let GET = new XMLHttpRequest();
        GET.open('GET', 'http://127.0.0.1:3000/getfile', true)
        GET.onreadystatechange = () => {
            if (GET.readyState === 4 && GET.status === 200) {
                state.postprocess = GET.responseText.substring(1,GET.responseText.length-5);
                console.log("received: " + state.postprocess);
                viewer.render();
            }
        }
        GET.send();
    }
}


var viewer = {
    render: () => {
        if (state.preprocess) {
            document.getElementById('preprocess').innerHTML = JSON.stringify(state.preprocess);
        }
        if (state.postprocess) {
            document.getElementById('postprocess').innerHTML = JSON.stringify(state.postprocess);
        }
    },
    disableButton: (target) => {
        document.getElementById(target).disabled = true;
    }
}


var controller = {
    initialize: () => {
        document.getElementById('submit').addEventListener('click', (event) => {
            event.preventDefault();
            viewer.disableButton(event.target.id);
            state.readFile();
            state.sendFile(); //async
        });
        document.getElementById('fileUpload').addEventListener('click', (event) => {
            let reader = new FileReader();
            event.preventDefault();
            viewer.disableButton(event.target.id);
            let file = document.getElementById('userFile').files[0];
            reader.onloadend = (event) => {
                state.preprocess = JSON.parse(reader.result);
                viewer.render();
                state.sendFile();
            }
            reader.readAsText(file);
        })
    }
}



console.log('app integrated properly');
console.log('initializing application');
controller.initialize();