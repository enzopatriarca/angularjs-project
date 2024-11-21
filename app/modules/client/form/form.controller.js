angular.module('clientApp')
    .controller('FormController', ['$scope', '$http', function ($scope, $http) {
        $scope.client = {};
        $scope.clients = JSON.parse(localStorage.getItem('clients')) || [];

        $scope.saveClient = function () {
            if (!$scope.client.type || !$scope.client.document || !$scope.client.name || !$scope.client.email) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campos obrigatórios!',
                    text: 'Por favor, preencha todos os campos obrigatórios.',
                    confirmButtonText: 'Ok',
                });
                return;
            }

            if ($scope.client.type === 'Juridica' && !$scope.client.fantasyName) {
                Swal.fire({
                    icon: 'error',
                    title: 'Nome Fantasia Obrigatório!',
                    text: 'Nome Fantasia é obrigatório para clientes Jurídicos!',
                    confirmButtonText: 'Entendido',
                });
                return;
            }

            $scope.clients.push($scope.client);
            localStorage.setItem('clients', JSON.stringify($scope.clients));

            Swal.fire({
                icon: 'success',
                title: 'Cliente Salvo!',
                text: 'O cliente foi salvo com sucesso.',
                confirmButtonText: 'Ok',
            }).then(() => {
                window.location = '#/list';
            });
        };

        $scope.resetForm = function () {
            $scope.client = {};
            $scope.clientForm.$setPristine();
            $scope.clientForm.$setUntouched();
        };

        $scope.searchCEP = function () {
            if ($scope.client.cep) {
                $http.get(`https://viacep.com.br/ws/${$scope.client.cep}/json/`)
                    .then(function (response) {
                        if (response.data) {
                            $scope.client.address = response.data.logradouro || '';
                            $scope.client.neighborhood = response.data.bairro || '';
                            $scope.client.city = response.data.localidade || '';
                        } else {
                            alert('CEP não encontrado!');
                        }
                    })
                    .catch(function () {
                        alert('Erro ao buscar CEP. Verifique a conexão ou o número informado.');
                    });
            }
        };
    }]);
