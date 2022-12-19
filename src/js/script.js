let cursor;
            let h1; 
            let x = 0, y = 0;
            let mx = 0, my = 0;
            const speed = 0.3;
            const mouseFunc = (e) =>{
                x = e.clientX, y = e.clientY;
                h1.innerHTML = `x: ${x} y: ${y}`;
                cursor.style.transform = `translate(${mx}px, ${my}px)`;
                h1.style.display = 'none';
            }

            const loop = () =>{
                mx += (x - mx) * speed;
                my += (y - my) * speed;

                window.requestAnimationFrame(loop);
            }

            window.onload = () =>{ 
                cursor = document.getElementsByClassName("cursor_item")[0];
                h1 = document.getElementsByTagName("h1")[0];
                document.addEventListener("mousemove", mouseFunc);
                loop();
            }