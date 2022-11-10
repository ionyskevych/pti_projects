var developers = {
    models: [],

    add: function(developer) {
        this.models.push(developer);
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    update: function(updatedDeveloper) {
        var developer = _.findWhere(this.models, {id: updatedDeveloper.id});
        console.log(developer)
        console.log(updatedDeveloper)
        _.extend(developer, updatedDeveloper);
        this.setModelsToStorage();
        $(this).trigger('change');
    }, 
    
    remove: function(id) {
        this.models = _.reject(this.models, function(developer) {
            return developer.id === id;
        });
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    get: function(id) {
        return _.findWhere(this.models, {id: id});
    },

    setModelsToStorage: function() {
        localStorage.setItem('developers', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('developers')) || [];
    },

    init: function() {
        this.models = this.getModelsFromStorage();
        this.setModelsToStorage();
    }
};

developers.init();

var listView = {
    tmplFn: doT.template($('#developerTemplate').html()),

    collection: developers,

    renderDevelopers: function() {
        $('.developerList').html(this.tmplFn(this.collection.models));
    },

    subscribe: function() {
        $('.buttonAdd').on('click', function() {
            formView.showAddForm();
        }.bind(this));

        $('.developerList').on('click', function(e) {
            if ($(e.target).hasClass('developer')) {
                var developer = this.collection.get(e.target.id);
                formView.showEditRemoveForm(developer);
            }
        }.bind(this));

        $(this.collection).on('change', function() {
            this.renderDevelopers();
        }.bind(this));
    },

    init: function() {
        this.subscribe();
        this.renderDevelopers();
    }

};
listView.init();


var formView = {
    $fields: $('#addForm input[type="text"]'),

    collection: developers,

    showAddForm: function() {
        // $('input').val('');
        this.resetForm();
        this.hideEditRemoveForm();
        $('#addForm').removeClass('hidden');
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    highlightFields: function() {
        this.$fields.each(function(index, field) {
            field.style.border = field.value === '' ? '1px solid red' : '';
        });
    },

    isFormDataValid: function() {
        return this.$fields.toArray().every(function(field) {
            return field.value !== '';
        });
    },

    getFormData: function() {
        var id = $('#addForm .id').val();

        return {
            id: id === '' ? this.getUniqId() : id,
            name: document.querySelector('#addForm .name').value,
            lastName: document.querySelector('#addForm .lastName').value,
            nickname: document.querySelector('#addForm .nickname').value,
            age: document.querySelector('#addForm .age').value,
            price: document.querySelector('#addForm .price').value,
        }
    },

    getEditFormData: function() {
        var id = $('#editForm .id').val();
        console.log(id);

        return {
            id: id === '' ? this.getUniqId() : id,
            name: document.querySelector('#editForm .name').value,
            lastName: document.querySelector('#editForm .lastName').value,
            nickname: document.querySelector('#editForm .nickname').value,
            age: document.querySelector('#editForm .age').value,
            price: document.querySelector('#editForm .price').value,
        }
    },

    showEditRemoveForm: function(developer) {
        $('input').val('');

        $('.id').val(developer.id);
        $('.name').val(developer.name);
        $('.lastName').val(developer.lastName);
        $('.nickname').val(developer.nickname);
        $('.age').val(developer.age);
        $('.price').val(developer.price);

        $('#editForm').removeClass('hidden');
        $('#addForm').addClass('hidden');
    },

    hideEditRemoveForm: function(developer) {
        $('#editForm').addClass('hidden');
    },


    resetForm: function() {
        $('input').val('');
    },

    init: function() {
        $('.buttonSave').on('click', function() {
            if (this.isFormDataValid()) {
                this.collection.add(this.getFormData());
                listView.renderDevelopers();
                this.resetForm();
            } else {
                this.highlightFields();
            }
            $('#addForm').addClass('hidden');
        }.bind(this));
       
        $('.buttonDelete').on('click', function() {
            var id = $('.id').val();
            this.collection.remove(id);
            this.resetForm();
            this.hideEditRemoveForm();
            listView.renderDevelopers();
        }.bind(this));

        $('.buttonUpdate').on('click', function() {
            var updatedDeveloper = this.getEditFormData();
            console.log(updatedDeveloper)
            this.collection.update(updatedDeveloper);
            this.resetForm();
            this.hideEditRemoveForm();
            listView.renderDevelopers();
        }.bind(this));
    }
};

formView.init();

