import GenTags from "./_Register"

const list = GenTags();

const GenTagsPageRouteList = function* () {
    for (let val of list) {
        yield {
            path: "/blog/tags/" + val,
            // element: val.content
            element: <BuildBlogStructure element={val.content} header={val.header}/>
        }
    }
}