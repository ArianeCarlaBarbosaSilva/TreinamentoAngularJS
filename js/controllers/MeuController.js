angular.module('loja').controller('MeuController', [
    function(){
        const self = this
        self.value = 10
        self.incrementar = function(){
            self.value++
        }
    }
])