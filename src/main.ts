import FroalaEditor from 'froala-editor';
//Just to prevent vite from tree-shaking the FroalaEditor import
console.log(FroalaEditor);

// Sprachen
import 'froala-editor/js/languages/de';
import 'froala-editor/js/languages/es';
import 'froala-editor/js/languages/fr';
import 'froala-editor/js/languages/it';
import 'froala-editor/js/languages/pl';
import 'froala-editor/js/languages/sk';

// Plugins
import 'froala-editor/js/plugins/colors.min';
import 'froala-editor/js/plugins/lists.min';
import 'froala-editor/js/plugins/table.min';
import 'froala-editor/js/plugins/link.min';
import 'froala-editor/js/plugins/url.min';
import 'froala-editor/js/plugins/paragraph_format.min';
import 'froala-editor/js/plugins/image.min';
import 'froala-editor/js/plugins/fullscreen.min';
import 'froala-editor/js/plugins/word_paste.min';
import 'froala-editor/js/plugins/inline_style.min';
import 'froala-editor/js/plugins/emoticons.min';

// Nicht entfernen!
// https://github.com/froala/wysiwyg-editor/issues/4794
import 'froala-editor/js/plugins/font_family.min';
import 'froala-editor/js/plugins/font_size.min';



import {doSomething} from "./some-dependency";
doSomething();