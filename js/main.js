var websiteList = []
function saveWebsite() {
    var siteName = document.getElementById("siteName");
    var siteurl = document.getElementById("siteurl");
    var website = {
        name: siteName.value,
        link: "http://"+siteurl.value,
    }
    websiteList.push(website)
    display ()
    console.log(websiteList)
    };
// 
function display (){
    var cartona= '';
    for (i=0;i<websiteList.length;i++){
        cartona+= `<tr>
                <td>${i}</td>
                <td>${websiteList[i].name}</td>
                <td><button onclick="visit('${websiteList[i].link}')" class="btn btn-success">visit</button></td>
                <td><button onclick="remove(${i})" class="btn btn-danger">remove</button></td>
            </tr>`
            document.getElementById("table").innerHTML=cartona;
    }
}
// 
function remove (index) {
    websiteList.splice(index,1);
    display();
}
function visit(link) {
    window.open(link, '_blank');
}