<?php

namespace Container96eGXur;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_K_I1wRQService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.K.I1wRQ' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.K.I1wRQ'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'entityManager' => ['privates', '.errored.tOOEpW5', NULL, 'Cannot determine controller argument for "App\\Controller\\InsertRecensementController::postForm()": the $entityManager argument is type-hinted with the non-existent class or interface: "App\\Controller\\EntityManagerInterface". Did you forget to add a use statement?'],
            'request' => ['privates', '.errored.eaR8CZv', NULL, 'Cannot determine controller argument for "App\\Controller\\InsertRecensementController::postForm()": the $request argument is type-hinted with the non-existent class or interface: "App\\Controller\\Request". Did you forget to add a use statement?'],
        ], [
            'entityManager' => '?',
            'request' => '?',
        ]);
    }
}