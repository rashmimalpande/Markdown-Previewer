var app = new Vue({
    el: '.main',
    data: {
        message:  '# Heading'
    },

    computed: {
        markdown: function() {
            return marked(this.message);
        }
    }
})