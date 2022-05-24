document.addEventListener("DOMContentLoaded", function(){





  addWavyUnderline(findAllUnorderedListElements("ul"));
  displayProjects()
});

function addWavyUnderline(elements) {
  for(let i = 0; i < elements.length; i++){
    elements[i].style.textDecoration="wavy underline"
  }
  }

function displayProjects() {
  let div = document.getElementById("projects")
  div.innerHTML=prepareProjects("haadii Projects","Ali","iam haadii and iam a web developer to be INSHALLAH and it will done hope so in 7 months or may be long but i dont want do that")
}

function findAllUnorderedListElements() {
  
  let results = document.querySelectorAll("projects")
  return results;
  
}

function prepareProjects(firstProject, secondProject, thirdProject) {
  let results = ""
  let list = [firstProject,secondProject,thirdProject]
  list.forEach((value,index) =>{
    if(value.length > 20){
      results += "<p>"+value+"</P></br>"
    } else{
      results += "<span>"+value+"</span>"+"<br>"
      
    }
  })
  return results;
}

exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









