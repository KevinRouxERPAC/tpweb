<?php

namespace ContainerAWh4hhw;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getControlerReactControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\ControlerReactController' shared autowired service.
     *
     * @return \App\Controller\ControlerReactController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/ControlerReactController.php';

        $container->services['App\\Controller\\ControlerReactController'] = $instance = new \App\Controller\ControlerReactController();

        $instance->setContainer(($container->privates['.service_locator.O2p6Lk7'] ?? $container->load('get_ServiceLocator_O2p6Lk7Service'))->withContext('App\\Controller\\ControlerReactController', $container));

        return $instance;
    }
}