document.addEventListener('DOMContentLoaded', function () {
    function translate() {
        const search = {
            'singular': 'Manual',
            'plural': 'Manuals',
            steps: {
                'name': 'steps',
                'singular': 'Manual step',
                'plural': 'Manuals steps',
                'global': 'Global steps',
                'count': 'Steps count',
                'module_title': 'Module title',
                'module_type': 'Module type',
                'content': 'Content',
                type: {
                    'safety_notice': 'Safety notice',
                    'installation': 'Installation',
                    'installation_distances': 'Installation distances',
                    'new_step': 'New step',
                    'custom_text': 'Custom text',
                    'technical_specs': 'Technical specs',
                },
                image: {
                    'name': 'Image',
                    type: {
                        'left': 'Image on left, text on right',
                        'right': 'Image on right, text on left',
                        'top': 'Image on top, text below',
                        'below': 'Image below, text on top',
                    }
                },
            },
            cover_pages: {
                'singular': 'Cover page',
                'plural': 'Cover pages',
            }
        };
        trans(search);
    }

    translate();

    function trans(objectParam) {
        getToString(objectParam);

        function getToString(obj) {
            for (let resultString in obj) {
                if (typeof (obj[resultString]) === 'object') {
                    getToString(obj[resultString]);
                } else {
                    document.getElementsByClassName('universal-recursive-result')[0].innerHTML += '<br/>' + obj[resultString];
                }
            }
        }
    }
});