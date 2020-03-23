function score2(){
    var match=parseInt(document.getElementById("match").value);
    var mismatch=parseInt(document.getElementById("mismatch").value);
    var gap=parseInt(document.getElementById("gap").value);
    var field1=document.getElementById("seq1").value;
    var field2=document.getElementById("seq2").value;
    var i;
    if (field1.length>field2.length){
        var extra =field1.length-field2.length;
        for(i=0;i<extra;i++){
        field2+="-";}
    }
    else{
        var extra =field2.length-field1.length;
        for(i=0;i<extra;i++){
        field1+="-";}
    }
    var lenx=field1.length;
    var score=0;
    var j=0;
    for(j=0;j<lenx;j++)
    {
        if((field1[j]==="-")||(field2[j]==="-"))
        {
            score+=gap;
        }
        else if(field1[j]==field2[j])
        {
            score+=match;
        }
        else if(field1[j]!=field2[j])
        {
            score+=mismatch;
        }
    }
    document.getElementById('result').value=score;
}


function score3(){
    var match=parseInt(document.getElementById("match").value);
    var mismatch=parseInt(document.getElementById("mismatch").value);
    var gap=parseInt(document.getElementById("gap").value);
    var field1=document.getElementById("seq1").value;
    var field2=document.getElementById("seq2").value;
    var field3=document.getElementById("seq3").value;
    var extra=Math.max(field1.length,field2.length,field3.length);
    if (field1.length<extra){
        var excess =extra-field1.length;
        for(i=0;i<excess;i++){
        field1+="-";}
    }
    if (field2.length<extra){
        var excess =extra-field2.length;
        for(i=0;i<excess;i++){
        field2+="-";}
    }
    if (field3.length<extra){
        var excess =extra-field3.length;
        for(i=0;i<excess;i++){
        field3+="-";}
    }
    var lenx=extra;
    var score12=0;
    var j=0;
    for(j=0;j<lenx;j++)
    {
        if((field1[j]==="-")||(field2[j]==="-"))
        {
            score12+=gap;
        }
        else if(field1[j]==field2[j])
        {
            score12+=match;
        }
        else if(field1[j]!=field2[j])
        {
            score12+=mismatch;
        }
    }
    var score23=0;
    var j=0;
    for(j=0;j<lenx;j++)
    {
        if((field3[j]==="-")||(field2[j]==="-"))
        {
            score23+=gap;
        }
        else if(field3[j]==field2[j])
        {
            score23+=match;
        }
        else if(field3[j]!=field2[j])
        {
            score23+=mismatch;
        }
    }

    var score13=0;
    var j=0;
    for(j=0;j<lenx;j++)
    {
        if((field1[j]==="-")||(field3[j]==="-"))
        {
            score13+=gap;
        }
        else if(field1[j]==field3[j])
        {
            score13+=match;
        }
        else if(field1[j]!=field3[j])
        {
            score13+=mismatch;
        }
    }
    var bestscore=Math.max(score12,score23,score13);
    document.getElementById('result').value=bestscore;
    if(bestscore==score12){document.getElementById('seqresult').value="SEQUENCE 1 AND 2";}
    if(bestscore==score13){document.getElementById('seqresult').value="SEQUENCE 1 AND 3";}
    if(bestscore==score23){document.getElementById('seqresult').value="SEQUENCE 2 AND 3";}
}
