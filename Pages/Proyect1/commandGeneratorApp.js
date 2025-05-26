// Generador de Comandos .NET en JavaScript puro
// Migración desde React a Vanilla JS

// Traducciones multi-idioma
const translations = {
  es: {
    title: 'Generador de Comandos .NET',
    subtitle: 'Selecciona una acción y personaliza los parámetros para generar tu comando dotnet.',
    selectAction: 'Selecciona una Acción:',
    generatedCommand: 'Comando Generado:',
    copy: 'Copiar al portapapeles',
    copied: '¡Comando copiado!',
    themeLight: '☀️ Claro',
    themeDark: '🌙 Oscuro',
    // Labels dinámicos (por id)
    template: 'Plantilla',
    name: 'Nombre del Proyecto',
    language: 'Lenguaje',
    output: 'Ruta de Salida',
    'no-https': 'Sin HTTPS',
    packageName: 'Nombre del Paquete',
    version: 'Versión (opcional)',
    source: 'Fuente del Paquete',
    project: 'Ruta del Proyecto (opcional)',
    force: 'Forzar restauración',
    configuration: 'Configuración',
    testFilter: 'Filtro de Prueba',
    logger: 'Logger',
    noBuild: 'No construir',
    run: 'Ejecutar Proyecto',
    build: 'Compilar Proyecto',
    publish: 'Publicar Aplicación',
    restore: 'Restaurar Dependencias',
    test: 'Ejecutar Pruebas',
    'add package': 'Añadir Paquete NuGet',
    new: 'Crear Nuevo Proyecto',
    activar: 'Activar',
    debug: 'Debug',
    release: 'Release',
    // ...agrega más si es necesario
  },
  en: {
    title: '.NET Command Generator',
    subtitle: 'Select an action and customize the parameters to generate your dotnet command.',
    selectAction: 'Select an Action:',
    generatedCommand: 'Generated Command:',
    copy: 'Copy to clipboard',
    copied: 'Command copied!',
    themeLight: '☀️ Light',
    themeDark: '🌙 Dark',
    template: 'Template',
    name: 'Project Name',
    language: 'Language',
    output: 'Output Path',
    'no-https': 'No HTTPS',
    packageName: 'Package Name',
    version: 'Version (optional)',
    source: 'Package Source',
    project: 'Project Path (optional)',
    force: 'Force restore',
    configuration: 'Configuration',
    testFilter: 'Test Filter',
    logger: 'Logger',
    noBuild: 'No build',
    run: 'Run Project',
    build: 'Build Project',
    publish: 'Publish Application',
    restore: 'Restore Dependencies',
    test: 'Run Tests',
    'add package': 'Add NuGet Package',
    new: 'Create New Project',
    activar: 'Activate',
    debug: 'Debug',
    release: 'Release',
    // ...add more if needed
  }
};

let currentLang = 'es';
function t(key) {
  return translations[currentLang][key] || key;
}

// 1. Definición de configuraciones de comandos
defineCommandConfigs();

function defineCommandConfigs() {
  window.commandConfigs = {
    'new': {
      label: 'Crear Nuevo Proyecto',
      baseCommand: 'dotnet new',
      parameters: [
        {
          id: 'template',
          label: 'Plantilla',
          type: 'select',
          options: [
            { value: 'console', label: 'Console App' },
            { value: 'web', label: 'Web App (ASP.NET Core Empty)' },
            { value: 'mvc', label: 'MVC Web App (ASP.NET Core MVC)' },
            { value: 'classlib', label: 'Class Library' },
            { value: 'react', label: 'React App' },
            { value: 'angular', label: 'Angular App' },
            { value: 'wpf', label: 'WPF App' },
            { value: 'winforms', label: 'Windows Forms App' },
            { value: 'webapp', label: 'Web App (Razor Pages)' },
            { value: 'blazorwasm', label: 'Blazor WebAssembly App' },
            { value: 'blazorserver', label: 'Blazor Server App' },
            { value: 'xunit', label: 'xUnit Test Project' },
            { value: 'nunit', label: 'NUnit Test Project' },
            { value: 'mstest', label: 'MSTest Test Project' },
            { value: 'globaljson', label: 'global.json' },
            { value: 'nugetconfig', label: 'NuGet Config' },
            { value: 'solution', label: 'Solution File' },
          ],
          required: true,
          placeholder: 'Selecciona una plantilla',
        },
        {
          id: 'name',
          label: 'Nombre del Proyecto',
          type: 'text',
          prefix: '--name',
          placeholder: 'MiProyecto',
        },
        {
          id: 'language',
          label: 'Lenguaje',
          type: 'select',
          options: [
            { value: '', label: 'Por defecto' },
            { value: 'C#', label: 'C#' },
            { value: 'F#', label: 'F#' },
            { value: 'VB', label: 'VB' },
          ],
          prefix: '--language',
          placeholder: 'Selecciona un lenguaje',
        },
        {
          id: 'output',
          label: 'Ruta de Salida',
          type: 'text',
          prefix: '--output',
          placeholder: './src/MyProject',
        },
        {
          id: 'no-https',
          label: 'Sin HTTPS',
          type: 'checkbox',
          prefix: '--no-https',
        },
      ],
    },
    'add package': {
      label: 'Añadir Paquete NuGet',
      baseCommand: 'dotnet add package',
      parameters: [
        {
          id: 'packageName',
          label: 'Nombre del Paquete',
          type: 'text',
          required: true,
          placeholder: 'Newtonsoft.Json',
        },
        {
          id: 'version',
          label: 'Versión (opcional)',
          type: 'text',
          prefix: '--version',
          placeholder: '13.0.1',
        },
        {
          id: 'source',
          label: 'Fuente del Paquete',
          type: 'text',
          prefix: '--source',
          placeholder: 'https://api.nuget.org/v3/index.json',
        },
        {
          id: 'project',
          label: 'Ruta del Proyecto (opcional)',
          type: 'text',
          prefix: '',
          placeholder: 'MiApp.csproj o ruta de la carpeta',
        },
      ],
    },
    'publish': {
      label: 'Publicar Aplicación',
      baseCommand: 'dotnet publish',
      parameters: [
        {
          id: 'configuration',
          label: 'Configuración',
          type: 'select',
          options: [
            { value: 'Release', label: 'Release' },
            { value: 'Debug', label: 'Debug' },
          ],
          prefix: '--configuration',
          defaultValue: 'Release',
          required: true,
        },
        {
          id: 'framework',
          label: 'Framework de Destino',
          type: 'text',
          prefix: '--framework',
          placeholder: 'net8.0',
        },
        {
          id: 'output',
          label: 'Carpeta de Salida',
          type: 'text',
          prefix: '--output',
          placeholder: './publish',
        },
        {
          id: 'runtime',
          label: 'Runtime de Destino',
          type: 'text',
          prefix: '--runtime',
          placeholder: 'win-x64',
        },
        {
          id: 'self-contained',
          label: 'Auto-contenido',
          type: 'checkbox',
          prefix: '--self-contained',
        },
        {
          id: 'no-build',
          label: 'No construir',
          type: 'checkbox',
          prefix: '--no-build',
        },
        {
          id: 'project',
          label: 'Ruta del Proyecto (opcional)',
          type: 'text',
          prefix: '',
          placeholder: 'MiApp.csproj o ruta de la carpeta',
        },
      ],
    },
    'build': {
      label: 'Compilar Proyecto',
      baseCommand: 'dotnet build',
      parameters: [
        {
          id: 'configuration',
          label: 'Configuración',
          type: 'select',
          options: [
            { value: 'Debug', label: 'Debug' },
            { value: 'Release', label: 'Release' },
          ],
          prefix: '--configuration',
          defaultValue: 'Debug',
          required: true,
        },
        {
          id: 'framework',
          label: 'Framework de Destino',
          type: 'text',
          prefix: '--framework',
          placeholder: 'net8.0',
        },
        {
          id: 'no-restore',
          label: 'No restaurar',
          type: 'checkbox',
          prefix: '--no-restore',
        },
        {
          id: 'project',
          label: 'Ruta del Proyecto (opcional)',
          type: 'text',
          prefix: '',
          placeholder: 'MiApp.csproj o ruta de la carpeta',
        },
      ],
    },
    'run': {
      label: 'Ejecutar Aplicación',
      baseCommand: 'dotnet run',
      parameters: [
        {
          id: 'project',
          label: 'Ruta del Proyecto (opcional)',
          type: 'text',
          prefix: '',
          placeholder: 'MiApp.csproj o ruta de la carpeta',
        },
        {
          id: 'configuration',
          label: 'Configuración',
          type: 'select',
          options: [
            { value: 'Debug', label: 'Debug' },
            { value: 'Release', label: 'Release' },
          ],
          prefix: '--configuration',
          defaultValue: 'Debug',
          required: true,
        },
        {
          id: 'framework',
          label: 'Framework de Destino',
          type: 'text',
          prefix: '--framework',
          placeholder: 'net8.0',
        },
        {
          id: 'no-build',
          label: 'No construir',
          type: 'checkbox',
          prefix: '--no-build',
        },
      ],
    },
    'restore': {
      label: 'Restaurar Dependencias',
      baseCommand: 'dotnet restore',
      parameters: [
        {
          id: 'project',
          label: 'Ruta del Proyecto (opcional)',
          type: 'text',
          prefix: '',
          placeholder: 'MiApp.csproj o ruta de la carpeta',
        },
        {
          id: 'source',
          label: 'Fuente del Paquete',
          type: 'text',
          prefix: '--source',
          placeholder: 'https://api.nuget.org/v3/index.json',
        },
        {
          id: 'force',
          label: 'Forzar restauración',
          type: 'checkbox',
          prefix: '--force',
        },
      ],
    },
  };
}
document.addEventListener('DOMContentLoaded', main);

function main() {
  const appDiv = document.getElementById('app') || createMainAppDiv();
  renderApp(appDiv);
}

function createMainAppDiv() {
  const div = document.createElement('div');
  div.id = 'app';
  document.body.appendChild(div);
  return div;
}

function renderApp(appDiv) {
  appDiv.innerHTML = '';

  // Panel izquierdo: título y subtítulo
  const leftPanel = document.createElement('div');
  leftPanel.className = 'left-panel';
  leftPanel.innerHTML = `
    <h1 class="text-3xl font-bold mb-4" style="color:#38f9a5;">${t('title')}</h1>
    <p class="text-lg text-gray-200 mb-8">${t('subtitle')}</p>
  `;

  // Panel derecho: formulario y resultado
  const rightPanel = document.createElement('div');
  rightPanel.className = 'right-panel';

  // Contenedor para idioma y tema
  const topRightControls = document.createElement('div');
  topRightControls.style = 'position: absolute; top: 1rem; right: 1rem; z-index: 10; display: flex; gap: 0.5rem; align-items: center;';

  // Selector de idioma con iconos de bandera
  const langs = [
    { lang: 'es', icon: '🇪🇸', label: 'Español' },
    { lang: 'en', icon: '🇺🇸', label: 'English' }
  ];
  const langBtnGroup = document.createElement('div');
  langBtnGroup.style = 'display:flex; gap:0.25rem;';
  langs.forEach(({ lang, icon, label }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = label;
    btn.style = `font-size: 1.45rem; width: 2.4rem; height: 2.4rem; border-radius: 50%; border: 2px solid ${currentLang === lang ? 'var(--color-accent)' : 'transparent'}; background: var(--color-bg-panel); color: var(--color-text-main); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: border 0.2s, box-shadow 0.2s; outline: none;`;
    btn.innerHTML = lang === 'es'
      ? `<svg width="32" height="32" viewBox="0 0 32 32" style="display:block;" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#C60B1E"/><rect y="10" width="32" height="12" fill="#FFC400"/></svg>`
      : `<svg width="20" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="#00247d"></rect><path d="M0 0l32 32M32 0L0 32" stroke="#fff" stroke-width="6"></path><path d="M0 0l32 32M32 0L0 32" stroke="#cf142b" stroke-width="4"></path><rect x="13" width="6" height="32" fill="#fff"></rect><rect y="13" width="32" height="6" fill="#fff"></rect><rect x="14.5" width="3" height="32" fill="#cf142b"></rect><rect y="14.5" width="32" height="3" fill="#cf142b"></rect></svg>`;
    if (currentLang === lang) {
      btn.style.boxShadow = '0 0 0 2px var(--color-accent)';
    } else {
      btn.onmouseover = () => btn.style.border = '2px solid var(--color-accent)';
      btn.onmouseout = () => btn.style.border = '2px solid transparent';
    }
    btn.onclick = () => {
      if (currentLang !== lang) {
        currentLang = lang;
        renderApp(document.getElementById('app'));
      }
    };
    langBtnGroup.appendChild(btn);
  });
  topRightControls.appendChild(langBtnGroup);

  // Botón de cambio de modo (claro/oscuro)
  const themeToggleBtn = document.createElement('button');
  themeToggleBtn.className = 'theme-toggle-btn';
  themeToggleBtn.style = 'padding: 0.5rem 1rem; border-radius: 1rem; border: none; background: var(--color-bg-panel); color: var(--color-text-main); cursor: pointer; font-size: 1.2rem;';
  themeToggleBtn.textContent = document.body.classList.contains('light-mode') ? t('themeDark') : t('themeLight');
  themeToggleBtn.onclick = function() {
    document.body.classList.toggle('light-mode');
    themeToggleBtn.textContent = document.body.classList.contains('light-mode') ? t('themeDark') : t('themeLight');
  };
  topRightControls.appendChild(themeToggleBtn);

  rightPanel.style.position = 'relative';
  rightPanel.appendChild(topRightControls);

  // Selector de acción
  rightPanel.appendChild(renderActionSelector());

  // Contenedor de parámetros dinámicos y resultado
  const paramsAndResultDiv = document.createElement('div');
  paramsAndResultDiv.id = 'params-and-result';
  rightPanel.appendChild(paramsAndResultDiv);

  // Estructura de dos columnas
  appDiv.appendChild(leftPanel);
  appDiv.appendChild(rightPanel);

  // Renderizar parámetros y resultado iniciales
  renderDynamicParamsAndResult();
}


function renderActionSelector() {
  const div = document.createElement('div');
  div.className = 'bg-gray-700 p-6 rounded-lg shadow-inner';

  const label = document.createElement('label');
  label.htmlFor = 'action-select';
  label.className = 'block text-xl font-semibold text-gray-200 mb-3';
  label.textContent = t('selectAction');
  div.appendChild(label);

  const selectDiv = document.createElement('div');
  selectDiv.className = 'relative';

  const select = document.createElement('select');
  select.id = 'action-select';
  select.className = 'block w-full px-5 py-3 pr-10 bg-gray-900 border border-gray-600 rounded-lg text-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out cursor-pointer';

  Object.keys(window.commandConfigs).forEach(key => {
    const option = document.createElement('option');
    option.value = key;
    // Si el label es string, intenta traducir por id, si es objeto, usa el idioma
    const label = window.commandConfigs[key].label;
    option.textContent = typeof label === 'object' ? (label[currentLang] || label['es']) : (t(label) || label);
    select.appendChild(option);
  });

  select.addEventListener('change', renderDynamicParamsAndResult);

  div.appendChild(select);
  return div;
}


function renderDynamicParamsAndResult() {
  const paramsAndResultDiv = document.getElementById('params-and-result');
  if (!paramsAndResultDiv) return;
  paramsAndResultDiv.innerHTML = '';

  const selectedAction = document.getElementById('action-select').value;
  const currentConfig = window.commandConfigs[selectedAction];
  if (!currentConfig) return;

  // Parámetros dinámicos
  const paramsDiv = document.createElement('div');
  paramsDiv.className = 'bg-gray-700 p-6 rounded-lg shadow-inner';
  const paramsTitle = document.createElement('h2');
  paramsTitle.className = 'text-xl font-semibold text-gray-200 mb-4';
  paramsTitle.innerHTML = `${t('generatedCommand')} <span class="font-bold">${typeof currentConfig.label === 'object' ? (currentConfig.label[currentLang] || currentConfig.label['es']) : t(currentConfig.label)}</span>:`;
  paramsDiv.appendChild(paramsTitle);

  // Estado de los parámetros
  const paramValues = {};
  (currentConfig.parameters || []).forEach(param => {
    if (param.type === 'checkbox') {
      paramValues[param.id] = false;
    } else {
      paramValues[param.id] = '';
    }
  });

  // Crear campos dinámicos
  currentConfig.parameters.forEach(param => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'flex flex-col';

    const label = document.createElement('label');
    label.htmlFor = param.id;
    label.className = 'block text-sm font-medium text-gray-300 mb-2';
    let labelText = t(param.id);
    if (labelText === param.id && param.label) {
      labelText = typeof param.label === 'object' ? (param.label[currentLang] || param.label['es']) : param.label;
    }
    label.innerHTML = `${labelText} ${param.required ? '<span class="text-red-400">*</span>' : ''}`;
    fieldDiv.appendChild(label);

    if (param.type === 'text') {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = param.id;
      input.value = paramValues[param.id];
      input.placeholder = param.placeholder && typeof param.placeholder === 'object' ? (param.placeholder[currentLang] || param.placeholder['es']) : (param.placeholder || '');
      input.className = 'w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out';
      input.addEventListener('input', onParamChange);
      fieldDiv.appendChild(input);
    } else if (param.type === 'select') {
      const select = document.createElement('select');
      select.id = param.id;
      select.value = paramValues[param.id];
      (param.options || []).forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = typeof opt.label === 'object' ? (opt.label[currentLang] || opt.label['es']) : t(opt.label) || opt.label;
        select.appendChild(option);
      });
      select.addEventListener('change', onParamChange);
      fieldDiv.appendChild(select);
    } else if (param.type === 'checkbox') {
      const checkboxDiv = document.createElement('div');
      checkboxDiv.className = 'flex items-center mt-1';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = param.id;
      checkbox.checked = paramValues[param.id];
      checkbox.className = 'mr-2';
      checkbox.addEventListener('change', onParamChange);
      checkboxDiv.appendChild(checkbox);
      const cbLabel = document.createElement('span');
      cbLabel.textContent = param.checkboxLabel ? (typeof param.checkboxLabel === 'object' ? (param.checkboxLabel[currentLang] || param.checkboxLabel['es']) : t(param.checkboxLabel) || param.checkboxLabel) : t('activar');
      checkboxDiv.appendChild(cbLabel);
      fieldDiv.appendChild(checkboxDiv);
    }
    paramsDiv.appendChild(fieldDiv);
  });

  paramsAndResultDiv.appendChild(paramsDiv);

  // Resultado
  const resultDiv = document.createElement('div');
  resultDiv.id = 'command-result';
  resultDiv.className = 'mt-8 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center';
  paramsAndResultDiv.appendChild(resultDiv);

  // Estado actual de parámetros
  paramsAndResultDiv.paramValues = paramValues;

  // Generar comando inicial
  onGenerateCommand();

  function onParamChange(e) {
    const { id, value, type, checked } = e.target;
    paramsAndResultDiv.paramValues[id] = type === 'checkbox' ? checked : value;
    onGenerateCommand();
  }

  function onGenerateCommand() {
    const command = generateCommand(selectedAction, paramsAndResultDiv.paramValues);
    renderResult(command, resultDiv);
  }
}

function generateCommand(selectedAction, parameters) {
  const config = window.commandConfigs[selectedAction];
  if (!config) return '';

  let command = config.baseCommand;
  const sortedParameters = [...config.parameters].sort((a, b) => {
    if (a.prefix === '' && b.prefix !== '') return -1;
    if (a.prefix !== '' && b.prefix === '') return 1;
    return 0;
  });

  sortedParameters.forEach(param => {
    const value = parameters[param.id];
    if (param.type === 'checkbox') {
      if (value) {
        command += ` ${param.prefix}`;
      }
    } else if (value) {
      if (param.id === 'packageName' && selectedAction === 'add package') {
        command += ` ${value}`;
      } else if (param.id === 'template' && selectedAction === 'new') {
        command += ` ${value}`;
      } else if (param.id === 'project' && ['run', 'build', 'publish', 'restore', 'test'].includes(selectedAction)) {
        command += ` ${value}`;
      } else {
        command += ` ${param.prefix} ${value}`;
      }
    }
  });
  return command.trim();
}

function renderResult(command, resultDiv) {
  resultDiv.innerHTML = '';
  const commandPre = document.createElement('pre');
  commandPre.className = 'w-full bg-gray-900 text-green-400 font-mono text-lg p-4 rounded-md break-all select-all';
  commandPre.textContent = command;
  resultDiv.appendChild(commandPre);

  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copiar al portapapeles';
  copyBtn.className = 'mt-4 py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200';
  copyBtn.addEventListener('click', function () {
    copyToClipboard(command);
    showCopiedMessage(resultDiv);
  });
  resultDiv.appendChild(copyBtn);
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Error al copiar el comando: ', err);
  } finally {
    document.body.removeChild(textarea);
  }
}

function showCopiedMessage(resultDiv) {
  let msg = document.createElement('span');
  msg.textContent = '¡Comando copiado!';
  msg.className = 'ml-4 text-green-400 animate-pulse';
  resultDiv.appendChild(msg);
  setTimeout(() => {
    if (msg.parentNode) msg.parentNode.removeChild(msg);
  }, 2000);
}
