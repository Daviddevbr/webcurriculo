let video = document.querySelector("video.videoBio");//variavel que receber a tag video html
let botons = document.querySelectorAll("button.player");//variavel que recebe os bottons html (essa variavel é um nodeList)
let fotos = document.querySelectorAll("img.fotosDesign");
let corpoSite = document.querySelectorAll("div.corposite");
let modal = document.querySelectorAll("section.modalWebDesign")

botons.forEach((item, index) => {//estrutura de laço forEach que tem como parametro o item nodeList e o Index

    item.addEventListener("click", () => {//função de click que incia quando o botton for clicado

        switch (index) {//estrutura de escolha passando como parametro o index do nodeList ela é responsavel por fazer a alteração do video assim que o botão for clicado.
            case 0:
                video.setAttribute("src", "videos/finaleu.mp4")//caso seja o primero botão o video incio é alterado
                break;
            case 1:
                video.setAttribute("src", "videos/portifolio.mp4")//caso seja o segundo botão o video explicando o portifolio é alterado
                break;
            case 2:
                video.setAttribute("src", "videos/bonsoir.mp4")//caso seja o terceiro botão o video consideração final é alterado
                break;
            default:
                break;
        }
    })
})

corpoSite.forEach((item, index) => {

    item.addEventListener("mouseover", () => {

        switch (index) {
            case 0:
                modal.forEach((item, index) => {

                    modal[0].style.display = "flex"
                    item.addEventListener("mouseout", () => {

                        item.style.display = "none"
                    })
                })
                break;
            case 1:
                modal.forEach((item, index) => {

                    modal[1].style.display = "flex"
                    item.addEventListener("mouseout", () => {

                        item.style.display = "none"
                    })
                })
                break;
            case 2:
                modal.forEach((item, index) => {

                    modal[2].style.display = "flex"
                    item.addEventListener("mouseout", () => {
                       
                        item.style.display = "none"
                    })
                })
                break;
            case 3:
                modal.forEach((item, index) => {

                    modal[3].style.display = "flex"
                    item.addEventListener("mouseout", () => {

                        item.style.display = "none"
                    })
                })
                break;
            default:
                break;
        }



    })
})

