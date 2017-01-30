var app = new Vue({
    el: '.main',
    data: {
        message: '# Heading 1'
    },

    computed: {
        markdown: function() {
            return marked(this.message);
        }
    }
})