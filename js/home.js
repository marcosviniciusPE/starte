
        const slides = document.querySelector('.slides')
        const slide = document.querySelectorAll('.slide')
        const dots = document.querySelectorAll('.dot')

        let index = 0

        function mostrarSlide(i){

            if(i >= slide.length) index = 0
            else if(i < 0) index = slide.length - 1
            else index = i

            slides.style.transform = `translateX(-${index * 100}%)`

            dots.forEach(dot => dot.classList.remove("active"))
            dots[index].classList.add("active")
        }

        document.querySelector(".direita").onclick = () => {
            mostrarSlide(index + 1)
        }

        document.querySelector(".esquerda").onclick = () => {
            mostrarSlide(index - 1)
        }

        dots.forEach((dot,i)=>{
            dot.onclick = () => mostrarSlide(i)
        })


        const elementos = document.querySelectorAll(".animar")

        const observar = new IntersectionObserver((entries)=>{

            entries.forEach(entry => {

                if(entry.isIntersecting){
                    entry.target.classList.add("visivel")
                }

            })

        })

        elementos.forEach(el=>{
            observar.observe(el)
        })
