
// 实现点击转化按钮时，将输入的十进制数字转化为二进制，并显示在result的p标签内
function dec2bin(decNumber) {

    //判断为非负整数
    if(decNumber<0||!Number.isInteger(decNumber)){
        alert("输入不是非负整数，请重新输入");
    }

    //十进制转二进制
    var a=new Array();
    for(var i=0;;i++){
        if(decNumber%2){      //为奇数则余1
            decNumber=(decNumber-1)/2;
            a[i]=1;
        }else{                //为偶数则余0
            decNumber/=2;
            a[i]=0;
        }
        if(decNumber==0) break;
    }

    //b为用户要求长度，c为上一步得到的数组长度
    var b=Number(document.getElementById("bin-bit").value);
    var c=a.length;
    /*
    转化显示后的二进制数为bin-bit中输入的数字宽度,如果bin-bit
    小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，
    bin-bit为2，依然输出101，但同时在console中报个错
    */
    try{
        if(b<c){
            throw"输入位数小于转化成的二进制位数";
        }
        else{
            b-=c;
            for(;b!=0;b--){
                a.push(0);      //给数组后面加0
            }
        }
    }
    catch(err){
        console.log(err);
    }
    
    //计算结果把a倒许并转化为字符串输出
    var d=document.getElementById("result");
    d.innerHTML="运算结果:&nbsp;&nbsp;&nbsp;&nbsp;"+a.reverse();
}


//3的小游戏，控制台输出（1~100），为3的倍数或含有3的数输出PA
for(var i=1;i<=100;i++){
    if(i%3==0||/3/.test(i)){ //正则表达式匹配数字中的“3”
        console.log("PA,");
    }
    else{
        console.log(i+",");
    }
}


//99乘法表
for(i=1;i<=9;i++){
    var arr=new Array();
    for(var j=1;j<=9;j++){
        var sum=i*j;
        arr.push(i+"*"+j+"="+sum+" ");
    }
    console.log(arr.join('')); //控制台输出有换行，放在循环内多次输出
}
