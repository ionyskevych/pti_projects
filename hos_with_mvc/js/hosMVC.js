var developers = {
    models: [],

    add: function(developer) {
        this.models.push(developer);
        $(this).trigger('change');
    },

    update: function(updatedDeveloper) {
        var developer = _.findWhere(this.models, {id: updatedDeveloper.id});
        _.extend(developer, updatedDeveloper);
        $(this).trigger('change');
    }, 
    
    remove: function(id) {
        this.models = _.reject(this.models, function(developer) {
            return developer.id === id;
        });
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
        $(this).on('change', this.setModelsToStorage.bind(this))
    }
};
developers.init();

var listView = {
    tmplFn: doT.template($('#developerTemplate').html()),

    collection: developers,

    render: function() {
        $('.developerList').html(this.tmplFn(this.collection.models));
    },

    subscribe: function() {
        $('.buttonAdd').on('click', this.handleClickOnAddBtn.bind(this));
        $('.developerList').on('click', this.handleClickOnWhore.bind(this));
        $(this.collection).on('change', this.render.bind(this));
    },

    handleClickOnAddBtn: function() {
        formView.showAddForm();
    },

    handleClickOnWhore: function(e) {
        if ($(e.target).hasClass('developer')) {
            var developer = this.collection.get(e.target.dataset.id);
            formView.showEditRemoveForm(developer);
        }
    },

    init: function() {
        this.subscribe();
        this.render();
    }
};
listView.init();

var formView = {
    $addFormFields: $('#addForm input[type="text"]'),

    $editFormFields: $('#editForm input[type="text"]'),

    collection: developers,

    showAddForm: function() {
        this.resetForm();
        this.hideEditRemoveForm();
        $('#addForm').removeClass('hidden');
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    highlightFields: function($fields) {
        $fields.each(function(index, field) {
            field.style.border = field.value === '' ? '1px solid red' : ''; // or add|remove class
        });
    },

    isFormDataValid: function($fields) {
        return $fields.toArray().every(function(field) {
            return field.value !== '';
        });
    },

    getAddFormData: function() {
        return {
            id: this.getUniqId(),
            name: $('#addForm .name').val(),
            lastName: $('#addForm .lastName').val(),
            nickname: $('#addForm .nickname').val(),
            age: $('#addForm .age').val(),
            price: $('#addForm .price').val(),
        }
    },

    getEditFormData: function() {
        return {
            id: $('#editForm .id').val(),
            name: $('#editForm .name').val(),
            lastName: $('#editForm .lastName').val(),
            nickname: $('#editForm .nickname').val(),
            age: $('#editForm .age').val(),
            price: $('#editForm .price').val(),
        }
    },

    showEditRemoveForm: function(developer) {
        this.resetForm();

        $('.id').val(developer.id);
        $('.name').val(developer.name);
        $('.lastName').val(developer.lastName);
        $('.nickname').val(developer.nickname);
        $('.age').val(developer.age);
        $('.price').val(developer.price);

        $('#editForm').removeClass('hidden');
        $('#addForm').addClass('hidden');
    },

    hideEditRemoveForm: function() {
        $('#editForm').addClass('hidden');
    },

    hideAddForm: function() {
        $('#addForm').addClass('hidden');
    },

    resetForm: function() {
        $('input').val('');
    },

    subscribe: function() {
        $('.buttonSave').on('click', this.handleSave.bind(this));
        $('.buttonDelete').on('click', this.handleDelete.bind(this));
        $('.buttonUpdate').on('click', this.handleUpdate.bind(this));
    },

    init: function() {
        this.subscribe();
    },

    handleSave: function() {
        if (this.isFormDataValid(this.$addFormFields)) {
            this.collection.add(this.getAddFormData());
            this.resetForm();
            this.hideAddForm();
        } else {
            this.highlightFields(this.$addFormFields);
        }
    },

    handleUpdate: function() {
        if (this.isFormDataValid(this.$editFormFields)) {
            var updatedDeveloper = this.getEditFormData();
            this.collection.update(updatedDeveloper);
            this.resetForm();
            this.hideEditRemoveForm();
        } else {
            this.highlightFields(this.$editFormFields);
        }
    },

    handleDelete: function() {
        var id = $('.id').val();
        this.collection.remove(id);
        this.resetForm();
        this.hideEditRemoveForm();
    }
};
formView.init();
