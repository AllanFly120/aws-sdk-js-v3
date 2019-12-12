/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package software.amazon.smithy.aws.typescript.codegen;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.jupiter.api.Test;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenPlugin;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;

public class AwsServiceIdIntegrationTest {
    @Test
    public void testSomeLibraryMethod() {
        Model model = Model.assembler()
                .addImport(getClass().getResource("serviceid.smithy"))
                .discoverModels()
                .assemble()
                .unwrap();
        Shape service = model.expectShape((ShapeId.from("smithy.example#OriginalName")));
        AwsServiceIdIntegration integration = new AwsServiceIdIntegration();
        SymbolProvider provider = TypeScriptCodegenPlugin.createSymbolProvider(model);
        SymbolProvider decorated = integration.decorateSymbolProvider(
                new TypeScriptSettings(), model, provider);
        Symbol symbol = decorated.toSymbol(service);

        assertThat(symbol.getName(), equalTo("NotSameClient"));
        assertThat(symbol.getNamespace(), equalTo("./NotSameClient"));
        assertThat(symbol.getDefinitionFile(), equalTo("NotSameClient.ts"));
    }
}
