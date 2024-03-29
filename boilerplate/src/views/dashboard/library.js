import 'cloud-ui.vusion.css';
import Vue from 'vue';
import * as CloudUI from 'cloud-ui.vusion';
import * as Components from '@/global/components';
import filters from '@/global/filters';

import { installOptions, installFilters, installDirectives, installComponents } from 'vusion-utils';
installOptions(Vue);
installDirectives(Vue, CloudUI.directives);
installFilters(Vue, filters);
installComponents(Vue, CloudUI);
installComponents(Vue, Components);
