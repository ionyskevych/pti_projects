//-----F5
// $(document).ready(function() {
//     var developerList = localStorage.getItem('developerList');
//     developerListObj = JSON.parse(developerList);
//     if (developerListObj != null && Object.entries(developerListObj).length > 0){
//         $('#moduleDevelopers').removeClass('hidden');
//         $('#moduleWithoutDeveloper').addClass('hidden');
//         showDeveloperListUl();
//     }
// });

$('.buttonAdd').on('click', function() {
    $('.moduleAddDeveloper').removeClass('hidden');
    $('.moduleEditForm').addClass('hidden');
});

//------- Add Developer
function handleAddFormSubmit(e) {
    e.preventDefault();
    var formData = serializeFormData(e.currentTarget);
    $('#moduleWithoutDeveloper').addClass('hidden');
    $('#moduleDevelopers').removeClass('hidden');
    cookieAddItem(formData);
    e.currentTarget.reset();
    showDeveloperListUl();
}

//------- Add Developer to #formEdit
$('body').on('click', '.developerListItem', function(e) {
    $('.moduleAddDeveloper').addClass('hidden');
    $('.moduleEditForm').removeClass('hidden');
    var developerList = localStorage.getItem('developerList');
    var developerListObj = JSON.parse(developerList);
    var developerID = e.target.dataset.developerid;
    document.querySelector('.developerListItem');
    var developerData = developerListObj[developerID];
    for (var key in developerData) {
        var input = "#formEdit input[name="+ key +"]";
        $(input).val(developerData[key]);
    }
    document.getElementById('formEdit').setAttribute('data-developerID', developerID);
});

//-------Delete Developer
$('#formEdit .buttonDelete').on('click', function(e) {
    e.preventDefault();
    var developerID = document.getElementById('formEdit').dataset.developerid;
    cookieDeleteItem(developerID);
    document.getElementById('formEdit').reset();
    showDeveloperListUl();
});

function handleEditFormSubmit(e) {
    e.preventDefault();
    var formData = serializeFormData(e.currentTarget);
    var id = e.currentTarget.dataset.developerid;
    cookieEditItem(formData, id);
    e.currentTarget.reset();
    showDeveloperListUl();
}

function appendDeveloperLi(formData, developerID) {
    var newDeveloper = document.createElement('li');
    newDeveloper.setAttribute('data-developerID', developerID);
    newDeveloper.innerText = formData.firstName + ' ' + formData.age + ',' + ' ' + '$' + formData.price;
    $(newDeveloper).addClass('developerListItem');
    $('#developerList').append(newDeveloper);
}

function showDeveloperListUl() {
    var developerList = localStorage.getItem('developerList');
    developerListObj = JSON.parse(developerList);
    console.log(developerListObj);
    if (developerListObj != null && Object.entries(developerListObj).length > 0) {
        $('#developerList').empty();
        for (var developerID in developerListObj) {
            appendDeveloperLi(developerListObj[developerID], developerID);
        }
    } else {
        $('#developerList').empty();
        $('#moduleDevelopers').addClass('hidden');
        $('.moduleEditForm').addClass('hidden');
        $('#moduleWithoutDeveloper').removeClass('hidden');
        localStorage.removeItem('developerList');
    }
}

function serializeFormData(form) {
    var data = Array.from(form)
        .filter((item) => !!item.name)
        .map((element) => {
            var {name, value} = element
            return {name, value}
        });
    var dataReturn = {};
    data.forEach(function (element, par2, par3) {
    dataReturn[element.name] = element.value;
    });
   return dataReturn;
}

function cookieAddItem(newDeveloper) {
    var developerListObj = {};
    var developerList = localStorage.getItem('developerList');
    developerListObj = JSON.parse(developerList);
    if (developerListObj === null) {
       developerListObj = {};
    }
    var newId = Math.random().toString(36).substr(2, 9);
    developerListObj[newId] = newDeveloper;
    localStorage.setItem('developerList', JSON.stringify(developerListObj));
}

function cookieEditItem (developer, id) {
    var developerListObj = {};
    var developerList = localStorage.getItem('developerList');
    developerListObj = JSON.parse(developerList);
    developerListObj[id] = developer;
    localStorage.setItem('developerList', JSON.stringify(developerListObj));
}

function cookieDeleteItem (id) {
    console.log(id);
    var developerList = localStorage.getItem('developerList');
    var developerListObj = JSON.parse(developerList);
    delete developerListObj[id];
    localStorage.setItem('developerList', JSON.stringify(developerListObj));
}

var applicantAddForm = $('#formAdd');
applicantAddForm.on('submit', handleAddFormSubmit);

var applicantEditForm = $('#formEdit');
applicantEditForm.on('submit', handleEditFormSubmit);










