// for page navigation & to sort on leftbar
export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Repos By Language",
    href: "/languages",
    noLink: undefined,
    items: [
      { title: "Go", href: "/go" },
      { title: "Python", href: "/python" },
      { title: "Swift", href: "/swift" },
      { title: "TypeScript", href: "/typescript" }, 
      { title: "Rust", href: "/rust" },
      { title: "Kotlin", href: "/kotlin" },
      { title: "CPython", href: "/cpython" },
      { title: "PHP", href: "/php" },
      { title: "Julia", href: "/julia" },
      { title: "Ruby", href: "/ruby" },
      { title: "CoffeeScript", href: "/coffeescript" },
      { title: "Elixir", href: "/elixir" },
      { title: "Crystal", href: "/crystal" },
      { title: "PowerShell", href: "/powershell" },
      { title: "Scala", href: "/scala" },
      { title: "C#", href: "/csharp" },
      { title: "Clojure", href: "/clojure" },
      { title: "MicroPython", href: "/micropython" },
      { title: "Erlang", href: "/erlang" },
      { title: "Nim", href: "/nim" },
      { title: "AssemblyScript", href: "/assemblyscript" },
      { title: "PureScript", href: "/purescript" },
      { title: "Elm", href: "/elm" },
      { title: "Red", href: "/red" },
      { title: "Pony", href: "/pony" },
      { title: "Frege", href: "/frege" },
      { title: "Goby", href: "/goby" },
      { title: "Racket", href: "/racket" },
      { title: "Idris", href: "/idris" },
      { title: "OCaml", href: "/ocaml" },
      { title: "Eta", href: "/eta" },
      { title: "Nu", href: "/nu" },
      { title: "LiveScript", href: "/livescript" },
      { title: "Io", href: "/io" },
      { title: "D", href: "/d" },
      { title: "Terra", href: "/terra" },
      { title: "F#", href: "/fsharp" },
      { title: "Skip", href: "/skip" },
      { title: "Rakudo", href: "/rakudo" },
      { title: "Chapel", href: "/chapel" },
      { title: "Lucee", href: "/lucee" },
      { title: "Golo", href: "/golo" },
      { title: "Gosu", href: "/gosu" },
      { title: "Zig", href: "/zig" },
      { title: "Haxe", href: "/haxe" },
      { title: "LiveCode", href: "/livecode" },
      { title: "Coq", href: "/coq" },
      { title: "V", href: "/v" },
      { title: "Dart", href: "/dart" },
      { title: "Pharo", href: "/pharo" },
      { title: "Ring", href: "/ring" },
      { title: "Senegal", href: "/senegal" },
      { title: "EO", href: "/eo" },
      { title: "ChavaScript", href: "/chavascript" },
      { title: "Jelly", href: "/jelly" },
      { title: "Beef", href: "/beef" },
      { title: "Cue", href: "/cue" },
      { title: "Java (OpenJDK)", href: "/java-openjdk" },
      { title: "TinyCC", href: "/tinycc" },
      { title: "PC-BASIC", href: "/pc-basic" },
      { title: "QB64", href: "/qb64" },
      { title: "Gleam", href: "/gleam" },
      { title: "Gwion", href: "/gwion" },
      { title: "Carbon", href: "/carbon" },
      { title: "Imba", href: "/imba" },
      { title: "Cane", href: "/cane" },
      { title: "Cython", href: "/cython" },
    ],
  },
  {
    title: "Repos By Framework",
    href: "/frameworks",
    noLink: undefined,
    items: [
      {
        title: "Web Development",
        href: "/web-development",
        items: [
          { title: "React", href: "/react" },
          { title: "Next.js", href: "/nextjs" },
          { title: "Gatsby", href: "/gatsby" },
          { title: "Jekyll", href: "/jekyll" },
          { title: "Hugo", href: "/hugo" },
          { title: "Astro", href: "/astro" },
          { title: "Node.js", href: "/nodejs" },
          { title: "Django", href: "/django" },
          { title: "Flask", href: "/flask" },
          { title: "Angular", href: "/angular" },
          { title: "Ruby on Rails", href: "/ruby-on-rails" },
          { title: "ASP.NET", href: "/aspnet" },
          { title: "ASP.NET Core", href: "/aspnet-core" },
          { title: "Laravel", href: "/laravel" },
          { title: "Spring", href: "/spring" },
          { title: "Spring Boot", href: "/spring-boot" },
          { title: "Vue.js", href: "/vuejs" },
          { title: "Nuxt.js", href: "/nuxtjs" },
          { title: "Express.js", href: "/expressjs" },
          { title: "Svelte", href: "/svelte" },
          { title: "SvelteKit", href: "/sveltekit" },
          { title: "Remix", href: "/remix" },
          { title: "Meteor", href: "/meteor" },
          { title: "Phoenix", href: "/phoenix" },
          { title: "FastAPI", href: "/fastapi" },
          { title: "Nest.js", href: "/nestjs" },
          { title: "Strapi", href: "/strapi" },
          { title: "Eleventy", href: "/eleventy" },
        ],
      },
      {
        title: "Mobile Development",
        href: "/mobile-development",
        items: [
          { title: "Flutter", href: "/flutter" },
          { title: "Xamarin", href: "/xamarin" },
          { title: "Ionic", href: "/ionic" },
          { title: "React Native", href: "/react-native" },
          { title: "Kotlin for Android", href: "/kotlin-android" },
          { title: "SwiftUI for iOS", href: "/swiftui-ios" },
          { title: "Capacitor", href: "/capacitor" },
        ],
      },
      {
        title: "Machine Learning and AI",
        href: "/machine-learning-and-ai",
        items: [
          { title: "TensorFlow", href: "/tensorflow" },
          { title: "Keras", href: "/keras" },
          { title: "PyTorch", href: "/pytorch" },
          { title: "Scikit-learn", href: "/scikit-learn" },
          { title: "JAX", href: "/jax" },
          { title: "FastAI", href: "/fastai" },
        ],
      },
      {
        title: "Desktop and Crossplatform",
        href: "/desktop-and-crossplatform",
        items: [
          { title: "Electron", href: "/electron" },
          { title: "Tauri", href: "/tauri" },
          { title: "Qt", href: "/qt" },
          { title: "Blazor", href: "/blazor" },
          { title: ".NET MAUI", href: "/dotnet-maui" },
          { title: "JavaFX", href: "/javafx" },
        ],
      },
      {
        title: "Game Development",
        href: "/game-development",
        items: [
          { title: "Unity", href: "/unity" },
          { title: "Unreal Engine", href: "/unreal-engine" },
          { title: "Godot", href: "/godot" },
          { title: "Phaser", href: "/phaser" },
          { title: "Three.js", href: "/threejs" },
        ],
      },
    ],
  },
  {
    title: "Repos By Purpose",
    href: "/purpose",
    noLink: undefined,
    items: [
      {
        title: "Developer Tools",
        href: "/developer-tools",
        items: [
          { title: "Code Editors", href: "/code-editors" },
          { title: "IDEs", href: "/ides" },
          { title: "Code Linters", href: "/code-linters" },
          { title: "Debugging Tools", href: "/debugging-tools" },
          { title: "Git Tools", href: "/git-tools" },
          { title: "CLI Tools", href: "/cli-tools" },
        ],
      },
      {
        title: "DevOps",
        href: "/devops",
        items: [
          { title: "Containerization", href: "/containerization" },
          { title: "CI/CD", href: "/ci-cd" },
          { title: "Monitoring", href: "/monitoring" },
          { title: "Infrastructure as Code", href: "/infrastructure-as-code" },
          { title: "Cloud Management", href: "/cloud-management" },
        ],
      },
      {
        title: "Security",
        href: "/security",
        items: [
          { title: "Penetration Testing", href: "/penetration-testing" },
          { title: "Authentication", href: "/authentication" },
          { title: "Encryption", href: "/encryption" },
          { title: "Vulnerability Scanners", href: "/vulnerability-scanners" },
          { title: "Security Auditing", href: "/security-auditing" },
        ],
      },
      {
        title: "Data Tools",
        href: "/data-tools",
        items: [
          { title: "Database Tools", href: "/database-tools" },
          { title: "Data Visualization", href: "/data-visualization" },
          { title: "Data Processing", href: "/data-processing" },
          { title: "Analytics", href: "/analytics" },
        ],
      },
      {
        title: "Testing",
        href: "/testing",
        items: [
          { title: "Unit Testing", href: "/unit-testing" },
          { title: "E2E Testing", href: "/e2e-testing" },
          { title: "Performance Testing", href: "/performance-testing" },
          { title: "Mocking", href: "/mocking" },
        ],
      },
      {
        title: "Content Management",
        href: "/content-management",
        items: [
          { title: "Headless CMS", href: "/headless-cms" },
          { title: "Media Management", href: "/media-management" },
          { title: "Documentation", href: "/documentation" },
        ],
      },
      {
        title: "Utilities",
        href: "/utilities",
        items: [
          { title: "Package Managers", href: "/package-managers" },
          { title: "Build Tools", href: "/build-tools" },
          { title: "Code Generators", href: "/code-generators" },
          { title: "Dependency Management", href: "/dependency-management" },
        ],
      },
      {
        title: "API Tools",
        href: "/api-tools",
        items: [
          { title: "API Testing", href: "/api-testing" },
          { title: "API Documentation", href: "/api-documentation" },
          { title: "API Security", href: "/api-security" },
          { title: "API Mocking", href: "/api-mocking" },
        ],
      },
      {
        title: "Blockchain",
        href: "/blockchain",
        items: [
          { title: "Smart Contracts", href: "/smart-contracts" },
          { title: "Wallet Integration", href: "/wallet-integration" },
          { title: "Blockchain Testing", href: "/blockchain-testing" },
        ],
      },
      {
        title: "UI Resources",
        href: "/ui-resources",
        items: [
          { title: "Design Systems", href: "/design-systems" },
          { title: "Icon Libraries", href: "/icon-libraries" },
          { title: "Animation Libraries", href: "/animation-libraries" },
          { title: "Color Tools", href: "/color-tools" },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();