//your code here
 const input = document.getElementById("input");
        let currentInput = "";

        function updateInput(value) {
            currentInput += value;
            input.value = currentInput;
        }

        function clearInput() {
            currentInput = "";
            input.value = "";
        }

        document.getElementById("block0").addEventListener("click", () => updateInput("0"));
        document.getElementById("block1").addEventListener("click", () => updateInput("1"));
        document.getElementById("block2").addEventListener("click", () => updateInput("2"));
        document.getElementById("block3").addEventListener("click", () => updateInput("3"));
        document.getElementById("block4").addEventListener("click", () => updateInput("4"));
        document.getElementById("block5").addEventListener("click", () => updateInput("5"));
        document.getElementById("block6").addEventListener("click", () => updateInput("6"));
        document.getElementById("block7").addEventListener("click", () => updateInput("7"));
        document.getElementById("block8").addEventListener("click", () => updateInput("8"));
        document.getElementById("block9").addEventListener("click", () => updateInput("9"));

        document.getElementById("plus").addEventListener("click", () => updateInput("+"));
        document.getElementById("minus").addEventListener("click", () => updateInput("-"));
        document.getElementById("multiply").addEventListener("click", () => updateInput("*"));
        document.getElementById("divide").addEventListener("click", () => updateInput("/"));
        document.getElementById("dot").addEventListener("click", () => updateInput("."));
        document.getElementById("clr").addEventListener("click", clearInput);

        document.getElementById("ans").addEventListener("click", () => {
            try {
                const result = eval(currentInput);
                input.value = result;
                currentInput = String(result);
            } catch (error) {
                if (error instanceof SyntaxError) {
                    input.value = "Error";
                    currentInput = "";
                } else if (error instanceof ReferenceError) {
                    input.value = "Infinity";
                    currentInput = "";
                }
            }
        });
