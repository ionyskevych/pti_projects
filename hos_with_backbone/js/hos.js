var Developer = Backbone.Model;

var Developers = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getModelsFromStorage());
        this.on('all', this.setModelsToStorage);
    },

    setModelsToStorage: function() {
        localStorage.setItem('developers', JSON.stringify(this.toJSON()));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('developers')) || [];
    }
});

var developers = new Developers;

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#developerTemplate').html()),

    el: '#listView',

    initialize: function() {
        this.listenTo(this.collection, 'all', this.render);
        this.render();
    },

    events: {
        'click .buttonAdd': 'handleClickOnAddBtn',
        'click .developer': 'handleClickOnWhore'
    },

    handleClickOnAddBtn: function() {
        formView.showAddForm();
    },

    handleClickOnWhore: function(e) {
        var developer = this.collection.get(e.target.dataset.id);
        formView.showEditRemoveForm(developer);
    },

    render: function() {
        this.$('.developerList').html(this.tmplFn(this.collection.toJSON()));
    }
});

var listView = new ListView({
    collection: developers
});

var FormView = Backbone.View.extend({
    $addFormFields: this.$('#addForm input[type="text"]'),

    $editFormFields: this.$('#editForm input[type="text"]'),

    el: '#forms',

    showAddForm: function() {
        this.resetForm();
        this.hideEditRemoveForm();
        this.$('#addForm').removeClass('hidden');
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    highlightFields: function($fields) {
        $fields.each(function(index, field) {
            field.style.border = field.value === '' ? '1px solid red' : '';
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
            name: this.$('#addForm .name').val(),
            lastName: this.$('#addForm .lastName').val(),
            nickname: this.$('#addForm .nickname').val(),
            age: this.$('#addForm .age').val(),
            price: this.$('#addForm .price').val(),
        };
    },

    getEditFormData: function() {
        return {
            id: this.$('#editForm .id').val(),
            name: this.$('#editForm .name').val(),
            lastName: this.$('#editForm .lastName').val(),
            nickname: this.$('#editForm .nickname').val(),
            age: this.$('#editForm .age').val(),
            price: this.$('#editForm .price').val(),
        };
    },

    showEditRemoveForm: function(developer) {
        this.resetForm();
        this.prefillFormData(developer.toJSON());

        this.$('#editForm').removeClass('hidden');
        this.$('#addForm').addClass('hidden');
    },

    prefillFormData: function(developer) {
        this.$('.id').val(developer.id);
        this.$('.name').val(developer.name);
        this.$('.lastName').val(developer.lastName);
        this.$('.nickname').val(developer.nickname);
        this.$('.age').val(developer.age);
        this.$('.price').val(developer.price);
    },

    hideEditRemoveForm: function() {
        this.$('#editForm').addClass('hidden');
    },

    hideAddForm: function() {
        this.$('#addForm').addClass('hidden');
    },

    resetForm: function() {
        this.$('input').val('');

        this.$addFormFields.each(function(index, field) {
            field.style.border = '';
        });
    },

    events: {
        'click .buttonSave': 'handleSave',
        'click .buttonDelete': 'handleDelete',
        'click .buttonUpdate': 'handleUpdate'
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
            this.collection.add(updatedDeveloper, {merge: true});
            this.resetForm();
            this.hideEditRemoveForm();
        } else {
            this.highlightFields(this.$editFormFields);
        }
    },

    handleDelete: function() {
        var id = this.$('.id').val();
        this.collection.remove(id);
        this.resetForm();
        this.hideEditRemoveForm();
    }
});

var formView = new FormView({
    collection: developers
});
