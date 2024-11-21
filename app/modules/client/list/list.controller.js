angular.module('clientApp')
    .controller('ListController', ['$scope', 'documentFormatFilter', function ($scope, documentFormatFilter) {
        $scope.clients = JSON.parse(localStorage.getItem('clients')) || [];

        // Navigate to the form page to create a new client
        $scope.newClient = function () {
            window.location = '#/form';
        };

        // Format the document using the custom filter
        $scope.formatDocument = function (document, type) {
            return documentFormatFilter(document, type);
        };

        // Delete a client with confirmation
        $scope.deleteClient = function (client) {
            Swal.fire({
                title: 'Tem certeza?',
                text: "Você deseja excluir este cliente?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, excluir!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Remove the client from the list
                    $scope.clients = $scope.clients.filter(c => c !== client);
                    // Update localStorage
                    localStorage.setItem('clients', JSON.stringify($scope.clients));
                    // Apply changes to scope
                    $scope.$apply(); // Required to update the UI after removing the client

                    // Show success message
                    Swal.fire(
                        'Excluído!',
                        'O cliente foi removido com sucesso.',
                        'success'
                    );
                }
            });
        };
    }]);
