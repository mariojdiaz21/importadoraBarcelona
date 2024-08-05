

function show_slection (){
    const userSelect = document.getElementById("product_selection").value;
    
    document.getElementById("H_selection").style.display = 'none';
    document.getElementById("O_slection").style.display = 'none';
    document.getElementById("A_selection").style.display = 'none';
    document.getElementById("I_selection").style.display = 'none';


    if(userSelect=="Higiene"){
        document.getElementById("H_selection").style.display = 'block';
    }else if(userSelect===""){}
        // Vaidations about the user selection
}