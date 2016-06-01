using System.Web;
using System.Web.Optimization;

namespace maksoodmohiuddin_website
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;

            bundles.Add(new ScriptBundle("~/thirdpartyjs").Include(
                      "~/ThirdParty/bower_components/jquery/dist/jquery.js",
                      "~/ThirdParty/bower_components/jquery/jquery.validate*",
                      "~/ThirdParty/misc/modernizr-*",
                      "~/ThirdParty/bower_components/bootstrap/dist/js/bootstrap.min.js",
                      "~/ThirdParty/misc/respond.js",
                      "~/ThirdParty/bower_components/angular/angular.js",
                      "~/ThirdParty/bower_components/angular/angular-ui-router.min.js"));

            bundles.Add(new StyleBundle("~/thirdpartycss").Include(
                      "~/ThirdParty/bootstrap/dist/css/bootstrap.min.css"));

            bundles.Add(new ScriptBundle("~/appjs").IncludeDirectory(
                        "~/App/js", "*.js", true));

            bundles.Add(new StyleBundle("~/appcss").Include(
                    "~/App/css/global.css",
                    "~/App/css/reset.css"));
        }
    }
}
