let oldNumber = "";
        var oldSign;
        numberToShow="";
        ans=0;
        function display(selected) {

            numberToShow = oldNumber + selected;
            document.getElementById("thetext").innerHTML = numberToShow;
            oldNumber = numberToShow;
        }
        function operation(sign){
            numberA=numberToShow;
            oldNumber="";
            oldSign=sign;
            
            switch(sign){
                case 1:
                document.getElementById("thetext").innerHTML = "+";
                    break;
                case 2:
                document.getElementById("thetext").innerHTML = "-";
                    break;
                case 3:
                document.getElementById("thetext").innerHTML = "*";
                    break;
                case 4:
                document.getElementById("thetext").innerHTML = "÷";
                    break;
                case 5:
                document.getElementById("thetext").innerHTML = "^";
                    break;
                case 6:
                document.getElementById("thetext").innerHTML = "√";
                    break;
                case 7:
                document.getElementById("thetext").innerHTML = numberA+"!";
                equal(sign);
                break;
            }
            
        }
        function equal(){
            var result;
            switch(oldSign){
                case 1:
                    result= parseFloat(numberA)+parseFloat(oldNumber);
                    break;
                case 2:
                    result= parseFloat(numberA)-parseFloat(oldNumber);
                    break;
                case 3:
                    result= parseFloat(numberA)*parseFloat(oldNumber);
                    break;
                case 4:
                    result= parseFloat(numberA)/parseFloat(oldNumber);
                    break;
                case 5:
                    result= parseFloat(numberA)**parseFloat(oldNumber);
                    break;
                case 6:
                    result= Math.sqrt(parseFloat(oldNumber));
                    break;
                case 7:
                    result=1;
                    for(let i=1;i<=parseFloat(numberA);i++)
                    {
                        result *=i;
                    }
                    break;
            }

            document.getElementById("thetext").innerHTML =result;
            oldNumber="";
            ans=result;
            numberToShow=result;
        }
        function erase()
        {
            document.getElementById("thetext").innerHTML = "0";
            oldNumber="";
            numberToShow="";
            ans=0;
        }