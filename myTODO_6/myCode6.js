
  
var myNodelist = document.getElementsByTagName("LI");
var n;
for (n = 0; n < myNodelist.length; n++) {
  var span = document.createElement("SPAN");
  var spanPriority = document.createElement("SPAN_2");
  var txt = document.createTextNode("-");
  //var inputPriority = document.querySelector('.list-input-field')?.value
  //spanPriority.innerText = inputPriority;
  //spanPriority.className = "priority";
  //spanPriority.appendChild(inputPriority);
  //myNodelist[n].appendChild(spanPriority);

  span.className = "close";
  span.appendChild(txt);
  myNodelist[n].appendChild(span);
}

var close = document.getElementsByClassName("close");
  var n;
  for (n = 0; n < close.length; n++) {
    close[n].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var priority = document.getElementsByClassName("priority");
  var n;
  for (n = 0; n < priority.length; n++) {
    priority[n].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var list = document.querySelector('ul');
  list.addEventListener('click', function(makeList) {
    if (makeList.target.tagName === 'LI') {
      makeList.target.classList.toggle('checked');
    }
  }, false);
  
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myList").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("-");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (n = 0; n < close.length; n++) {
      close[n].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  